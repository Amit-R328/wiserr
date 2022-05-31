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
    getGigByName,
    query,
    subscribe,
    unsubscribe,
    getById,
    saveGigRating,
    remove,
    save,
    getNumOfPages,
    getAllGigs

}
 
function getAllGigs() {
    query()
        .then(gigs => gigs)
}

function getGigByName() {
    return [
        {
            title: 'Fashion Designer',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png'
        },
        {
            title: 'Marketing Expert',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png'
        },
        {
            title: 'Shoemaker And Designer',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png'
        },
        {
            title: 'Bar Owner',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png'
        },
        {
            title: 'Video Editor',
            img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png'
        }
    ]
}

function getById(gigId) {
    // return storageService.get(STORAGE_KEY, gigId)
    let gig = httpService.get(`gig/${gigId}`)
    return gig
}

async function query(filterBy = {}) {
    // async function query({ txt = '', priceMin = 0, priceMax = Infinity, deliveryDate = 0, category = '' }) {
    const {txt = '', priceMin = 0, priceMax = Infinity, deliveryDate = 0, category = '', sortBy = 'title'} = filterBy
    const url = `?txt=${txt}&priceMin=${priceMin}&priceMax=${priceMax}&deliveryDate=${deliveryDate}&category=${category}&sortBy=${sortBy}`
    const urlToRequest = 'gig/'+url
    console.log('urlToRequest', urlToRequest)
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
            "aboutThisGig": gig.sellerDescription,
            "whyUs": gig.whyUs || "",
            "whatDoYouGet": gig.whatDoYouGet || ""
        },
        "imgUrl": gig.imgUrl || [],
        "category": gig.category
    } 
    
    if (gig._id) {
        // console.log('BASE_URL + gig._id',BASE_URL + gig._id )
        newGig = await httpService.put('gig',gig)
        // savedGig = await axios.put(BASE_URL + gig._id, gig)
        console.log('newGig',newGig)
        gigChannel.postMessage(getActionUpdateGig(newGig))
    } else {
        // savedGig = await axios.post(BASE_URL, gig)
        // savedGig = savedGig.data
        newGig = await httpService.post('gig',newGig)
        gigChannel.postMessage(getActionAddGig(newGig))
    }
    return newGig
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