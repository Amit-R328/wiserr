// import { storageService } from "./async-storage.service.js"
// import { utilService } from "./util.service.js"
import Axios from 'axios'
import { httpService } from './http.service.js'
import { gigService } from './gig.service.js'

const orderChannel = new BroadcastChannel('orderChannel')


const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? '/api/gig/'
        : 'http://localhost:3030/api/gig/'


        
let axios = Axios.create({
    withCredentials: true,
})


export const orderService = {
    query,
    saveOrder,
    updateOrder
}

async function query(loggedInUser, typeOf){
    // console.log('loggedInUser', loggedInUser)
    // let orders = await storageService.query('order')
    // const urlToRequest =  '/order'
    // console.log('urlToRequest', urlToRequest)
    let orders =  await httpService.get('order')
    let gigs = await gigService.query();
    if (typeOf === 'getBuys') {
        if(loggedInUser.isSeller){
            orders = orders.filter(order => {
                return order.buyer.fullName === loggedInUser.userName})
        }else {
            orders = orders.filter(order => order.buyer.fullName === loggedInUser.userName)
        }
    }else {
        if(loggedInUser.isSeller){
            orders = orders.filter(order => order.seller.fullName === loggedInUser.userName)
        }else {
            orders = []
        }
    }
    orders = orders.map(order => {
        return orders = {...order, gig: {...order.gig, imgUrl: gigs.find(gig => gig.title === order.gig.description).imgUrl[0]} }})
    console.log(orders)
        return orders
    // console.log('order', orders)
}

async function saveOrder(gigId, loggedinUser){
    try {
    // let gig = await storageService.get('gig',gigId)
    // let urlToRequest = BASE_URL
    //   console.log('urlToRequest', urlToRequest)
    // let gig =  await httpService.get('gig',gigId)
       let gig = await httpService.get(`gig/${gigId}`)
       console.log('gig', gig)

    // const seller = await storageService.get('user',gig.owner._id)
    // urlToRequest = BASE_URL + 'user'
    //   console.log('urlToRequest', urlToRequest)
    
    // let seller =  httpService.get('user',gig.owner._id)
    // console.log('gig.owner._id',gig.owner._id )
    // let seller = await httpService.get(`user/${gig.owner._id}`)
    // console.log('seller', seller)
    // console.log('gig.owner',gig.owner )
    // console.log('seller', seller)
        const order =        
        {
            // "_id": utilService.makeId(),
            "createdAt": Date.now(),
            "deliveryDate": Date.now() + (gig.daysToMake * 86400000),
            "buyer": {
                "_id": loggedinUser._id,
                "fullName": loggedinUser.userName,
                "ImgUrl": loggedinUser.imgUrl
            },
            "seller": {
                "_id": gig.owner._id,
                "fullName":  gig.owner.fullName,
                "imgUrl": gig.owner.imgUrl
            },
            "gig": {
                "_id": gigId,
                "description": gig.title,
                "price": gig.price,
                "category": gig.category
            },
            "status": "pending"
        }
    // console.log('order', order)
    // const addedOrder = await storageService.post('order', order)
        const urlToRequest =  'order'
        console.log('urlToRequest', urlToRequest)
        console.log('order', order)
        let addedOrder =  await httpService.post(urlToRequest,order)
        console.log('addedOrder', addedOrder)
        return addedOrder
    } catch (err) {
        console.dir('Cannot save order:',err)
        throw err
    } 
}

async function updateOrder(order){
    try {
        const urlToRequest =  `order/${order._id}`       
        await httpService.put(urlToRequest,order)
        return order
    } catch (err) {
        console.dir('Cannot update order:',err)
        throw err
    }
}