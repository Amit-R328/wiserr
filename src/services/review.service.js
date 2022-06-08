import { storageService } from './async-storage.service'
import { userService } from './user.service'
import { socketService, SOCKET_EVENT_REVIEW_ADDED, SOCKET_EVENT_REVIEW_ABOUT_YOU } from './socket.service'
import { getActionRemoveReview, getActionAddReview } from '../store/actions/review.actions.js'
import { store } from '../store/root.reducer.js'
import { showSuccessMsg } from '../services/event-bus.service'

const reviewChannel = new BroadcastChannel('reviewChannel')
const STORAGE_KEY = 'gig'

  ; (() => {
    reviewChannel.addEventListener('message', (ev) => {
      store.dispatch(ev.data)
    })
    socketService.on(SOCKET_EVENT_REVIEW_ADDED, (review) => {
      console.log('GOT from socket', review)
      store.dispatch(getActionAddReview(review))
    })
    socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, (review) => {
      showSuccessMsg(`New review about me ${review.txt}`)
    })
  })()



export const reviewService = {
  add,
  query,
  remove,
  addStarRate
}


function query(filterBy) {
  var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
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

async function add(review) {
  // const addedReview = await httpService.post(`review`, review)

  review.byUser = userService.getLoggedinUser()
  review.aboutUser = await userService.getById(review.aboutUserId)
  const addedReview = await storageService.post('review', review)

  reviewChannel.postMessage(getActionAddReview(addedReview))

  return addedReview
}

async function addStarRate(review, stars) {
  // const addStarRate = await httpService.post(`review`, review)

  review.byUser = userService.getLoggedinUser()
  review.aboutGig = await userService.getById(review.aboutGigId)
  const addedReview = await storageService.post('review', review)

  reviewChannel.postMessage(getActionAddReview(addedReview))

  return addedReview
}

// This way, we can also subscribe to none-store data change
// function subscribe(listener) {
//   reviewChannel.addEventListener('message', listener)
// }
// function unsubscribe(listener) {
//   reviewChannel.removeEventListener('message', listener)
// }
