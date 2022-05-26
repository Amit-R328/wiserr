import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'gig'

const gigChannel = new BroadcastChannel('gigChannel')

export const gigService = {
    getGigByName,
    query,
    subscribe,
    unsubscribe,
    getById

}

function getGigByName(){
    return [
        {title: 'Fashion Designer', 
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png'}, 
        {title:'Marketing Expert',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png'}, 
        {title: 'Shoemaker And Designer',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png'}, 
        {title:'Bar Owner',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png'},
        {title: 'Video Editor',
        img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png'}
    ]
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

async function query({ txt = '', priceMin = 0, priceMax = Infinity, deliveryDate = 0, category = ''}){
    let gigs = await storageService.query(STORAGE_KEY)
    console.log('GIGS FROM SERVICE:', gigs)
    if (txt) {
        const regex = new RegExp(txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description) || regex.test(gig.owner.fullName))
    }
    if(priceMin) gigs = gigs.filter(gig => gig.price >= priceMin)
    if(priceMax < Infinity) gigs.filter(gig => gig.price <= priceMax)
    if(deliveryDate) gigs.filter(gig => gig.daysToMake === deliveryDate)
    if(category) gigs.filter(gig => gig.category === category)
    return Promise.resolve(gigs)
}

function subscribe(listener) {
    gigChannel.addEventListener('message', listener)
}

function unsubscribe(listener) {
    gigChannel.removeEventListener('message', listener)
}