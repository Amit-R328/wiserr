import { storageService } from './async-storage.service'
import { getActionRemoveReview } from '../store/actions/review.actions.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const reviewChannel = new BroadcastChannel('reviewChannel')
const STORAGE_KEY = 'gig'
  // (() => {
  //   reviewChannel.addEventListener('message', (ev) => {
  //     store.dispatch(ev.data)
  //   })
  //   socketService.on(SOCKET_EVENT_REVIEW_ADDED, (review) => {
  //     console.log('GOT from socket', review)
  //     store.dispatch(getActionAddReview(review))
  //   })
  //   socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, (review) => {
  //     showSuccessMsg(`New review about me ${review.txt}`)
  //   })
  // })()

export const reviewService = {
  add,
  query,
  remove,
  
}

function query(filterBy) {
  // let queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  // return httpService.get(`review${queryStr}`)
  let gigs = storageService.query(STORAGE_KEY)
  gigs = gigs.filter(gig => gig._id === filterBy)
  let reviews = gigs.map(gig => gig.reviews.map(review => review))
  return Promise.resolve(reviews)
}

async function remove(reviewId) {
  // await httpService.delete(`review/${reviewId}`)
  await storageService.remove('review', reviewId)
  reviewChannel.postMessage(getActionRemoveReview(reviewId))
}

async function add(txt, rate, user, gig) {
  const review = {
    _id: utilService.makeId(),
    userName: user.userName,
    content: txt,
    userImage: user.imgUrl,
    stars: rate,
    userCountry: 'Israel',
    isHelpful: true,
    isNotHelpful: false
  }
  gig.reviews.unshift(review)
  try {
    let addedReview = await httpService.put(`gig/${gig._id}`, gig)
    return addedReview
  } catch (err) {
    console.dir('Cannot add review:', err)
    throw err
  }
}
