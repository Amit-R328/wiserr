import Axios from 'axios'
import { httpService } from './http.service.js'
import { getActionRemoveGig, getActionAddGig, getActionUpdateGig } from '../store/actions/gig.actions.js'
import { utilService } from './util.service.js'

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
    return [{ title: 'Logo Design', param: 'Graphics & Design' }, { title: 'Marketing', param: 'Digital Marketing' }, { title: 'Translation', param: 'Writing & Translation' }, { title: 'Arts & Crafts', param: 'Lifestyle' }]
}

function getById(gigId) {
    // return storageService.get(STORAGE_KEY, gigId)
    let gig = httpService.get(`gig/${gigId}`)
    return gig
}

async function query(filterBy = {}) {

    const { txt = '', priceMin = 0, priceMax = Infinity, deliveryDate = 0, category = '', sortBy = 'title' } = filterBy
    const url = `?txt=${txt}&priceMin=${priceMin}&priceMax=${priceMax}&deliveryDate=${deliveryDate}&category=${category}&sortBy=${sortBy}`
    const urlToRequest = 'gig/' + url
    // let gigs = await storageService.query(STORAGE_KEY)
    let gigs = httpService.get(urlToRequest)

    return gigs
}

async function remove(gigId) {

    gigChannel.postMessage(getActionRemoveGig(gigId))

}

async function save(gig) {

    if (gig._id) {
        await httpService.put(`gig/${gig._id}`, gig)
        return gig
    } else {
        let newGig = {
            "title": gig.gigTitle,
            "price": gig.price,
            "avgGigRating": [],
            "level": 'Level 1 Seller',
            "reviews": [],
            "owner": {
                "_id": gig.owner._id,
                "fullName": gig.owner.userName,
                "imgUrl": gig.owner.imgUrl || "",
                "from": gig.origin,
                "memberSince": utilService.setDateTime(Date.now()),
                "avgResponseTime": "now",
                "lastDelivery": "None yet"
            },
            "daysToMake": gig.daysToMake,
            "description": {
                "aboutThisGig": gig.gigDescription,
                "whyUs": gig.whyUs || "",
                "whatDoYouGet": gig.whatDoYouGet || ""
            },
            "imgUrl": gig.imgUrl || [],
            "category": gig.category,
            "likedByUsers": []
        }

        newGig = await httpService.post('gig', newGig)
        gigChannel.postMessage(getActionAddGig(newGig))
        return newGig
    }

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