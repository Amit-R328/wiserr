import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"
import Axios from 'axios'
import { httpService } from './http.service.js'

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
    saveOrder
}

async function query(loggedInUser){
    // console.log('loggedInUser', loggedInUser)
    // let orders = await storageService.query('order')
    // const urlToRequest =  '/order'
    // console.log('urlToRequest', urlToRequest)
    let orders =  await httpService.get('order')
    
    // for(var i=0;i< orders.length;i++){

    //     console.log('order buyer', orders[i].buyer)
    //     // console.log('order seller', orders[i].seller.fullName)
    // }
    
    if(!loggedInUser.isSeller) {
        orders = orders.filter(order => order.buyer.fullName === loggedInUser.userName)}
    else orders = orders.filter(order => {
        // console.log('order.seller.fullname', order.seller.fullName, 'loggedInUser.username', loggedInUser.userName )
       return order.seller.fullName === loggedInUser.userName})
    // console.log('order', orders)
    return orders
}

async function saveOrder(gigId, loggedinUser){
    
    // let gig = await storageService.get('gig',gigId)
    // let urlToRequest = BASE_URL
    //   console.log('urlToRequest', urlToRequest)
    // let gig =  await httpService.get('gig',gigId)
    let gig = await httpService.get(`gig/${gigId}`)
     

    // const seller = await storageService.get('user',gig.owner._id)
    // urlToRequest = BASE_URL + 'user'
    //   console.log('urlToRequest', urlToRequest)
    
    // let seller =  httpService.get('user',gig.owner._id)
    // console.log('gig.owner._id',gig.owner._id )
    let seller = await httpService.get(`user/${gig.owner._id}`)
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
    // console.log('urlToRequest', urlToRequest)
    let addedOrder =  httpService.post(urlToRequest,order)
    // console.log('addedOrder', addedOrder)
    return addedOrder
}