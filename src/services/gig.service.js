import Axios from 'axios'
import { httpService } from './http.service.js'
import { getActionRemoveGig, getActionAddGig, getActionUpdateGig } from '../store/actions/gig.actions.js'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// const BASE_URL = '/api/gig/'

const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? '/api/gig/'
        : 'http://localhost:3030/api/gig/'

let axios = Axios.create({
    withCredentials: true,
})



const STORAGE_KEY = 'gig'
const PAGE_SIZE = 32
const gigChannel = new BroadcastChannel('gigChannel')

export const gigService = {
    query,
    subscribe,
    unsubscribe,
    getById,
    saveGigRating,
    remove,
    save,
    getNumOfPages,
    getAllGigs,
    getPopularCategories

}
 
function getAllGigs() {
    query()
        .then(gigs => gigs)
}

function getPopularCategories() {
    return [{title:'Logo Design', param: 'Graphics & Design'}, {title:'Marketing', param:'Digital Marketing'}, {title: 'Translation', param: 'Writing & Translation'}, {title:'Arts & Crafts', param:'Lifestyle'}]
}

function getById(gigId) {
    // return storageService.get(STORAGE_KEY, gigId)
    let gig = httpService.get(`gig/${gigId}`)
    return gig
}

async function query(filterBy = {}) {

    // async function query({ txt = '', priceMin = 0, priceMax = Infinity, deliveryDate = 0, category = '' }) {
    const {txt = '', priceMin = 0, priceMax = Infinity, deliveryDate = 0, category = '', sortBy = 'title'} = filterBy
    // const {txt = '', priceMin = 0, priceMax = Infinity, deliveryDate = 0, category = '', sortBy = 'title'} = filterBy
    const url = `?txt=${txt}&priceMin=${priceMin}&priceMax=${priceMax}&deliveryDate=${deliveryDate}&category=${category}&sortBy=${sortBy}`
    const urlToRequest = 'gig/'+url
    // let gigs = await storageService.query(STORAGE_KEY)
    let gigs =  httpService.get(urlToRequest)
    
    // if (txt !== '') {
    //     const regex = new RegExp(txt, 'i')
    //     gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description) || regex.test(gig.owner.fullName))
    // }
    // if (priceMin > 0) gigs = gigs.filter(gig => gig.price >= priceMin)
    // if (priceMax < Infinity) gigs = gigs.filter(gig => gig.price <= priceMax)
    // if (deliveryDate > 0) gigs = gigs.filter(gig => gig.daysToMake === deliveryDate)
    // if (category !== '') gigs = gigs.filter(gig => gig.category === category)
    return gigs
}

async function remove(gigId) {
    // await axios.delete(BASE_URL + gigId)
    // await httpService.delete(`gig/${gigId}`)
    gigChannel.postMessage(getActionRemoveGig(gigId))
    // return gigId
}

async function save(gig) {
    if (gig._id) {
        // console.log('BASE_URL + gig._id',BASE_URL + gig._id )
        // console.log('gig in gig service row 131',gig )
        await httpService.put(`gig/${gig._id}`,gig)
        // savedGig = await axios.put(BASE_URL + gig._id, gig)
        // console.log('gig',gig)
        return gig
        // gigChannel.postMessage(getActionUpdateGig(newGig))
    } else {
        let newGig = {
            // "_id": utilService.makeId(),
            "title": gig.gigTitle,
            "price": gig.price,
            "avgGigRating": [],
            "level": 'Level 1 Seller',
            "reviews": [],
            "owner": {
                "_id":gig.owner._id,
                "fullName":gig.owner.userName,
                "imgUrl": gig.owner.imgUrl || "",
                "from": gig.origin,
                "memberSince":utilService.setDateTime(Date.now()),
                "avgResponseTime": "now",
                "lastDelivery":"None yet"
            },
            "daysToMake":gig.daysToMake,
            "description": {
                "aboutThisGig": gig.gigDescription,
                "whyUs": gig.whyUs || "",
                "whatDoYouGet": gig.whatDoYouGet || ""
            },
            "imgUrl": gig.imgUrl || [],
            "category": gig.category,
            "likedByUsers": []
        } 

        newGig = await httpService.post('gig',newGig)
        gigChannel.postMessage(getActionAddGig(newGig))
        return newGig
    }
    // await storageService.post('gig', newGig)
    
}


async function getNumOfPages() {
    const gigs = await query()
    const gigsQty = gigs.data.length / PAGE_SIZE
    return gigsQty
    // return JSON.parse(localStorage.getItem(STORAGE_KEY)).length / PAGE_SIZE
}

function subscribe(listener) {
    gigChannel.addEventListener('message', listener)
}

function unsubscribe(listener) {
    gigChannel.removeEventListener('message', listener)
}

async function saveGigRating(gig) {
    // const savedGig = await axios.put(BASE_URL + gig._id, gig)
}