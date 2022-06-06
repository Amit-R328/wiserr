// import { storageService } from "./async-storage.service.js"
// import { utilService } from "./util.service.js"
import Axios from 'axios'
import { httpService } from './http.service.js'
import { gigService } from './gig.service.js'
import { socketService } from './socket.service.js'

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
            orders = orders.filter(order => {
                // console.log('loggedInUser.userName',loggedInUser.userName )
                // console.log('order.seller.fullName',order.seller.fullName )
                return order.seller.fullName === loggedInUser.userName
            })
        }else {
            orders = []
        }
    }
    // console.log('orders', orders)
    orders = orders.map(order => {
        return orders = {...order, gig: {...order.gig, imgUrl: gigs.find(gig => gig._id === order.gig._id).imgUrl[0] } } } )

// return orders = {...order, gig: {...order.gig, imgUrl: gigs.find(gig => {
//     console.log('gig.title === order.gig.description',gig.title === order.gig.description )
//     console.log('gig.title', gig._id,gig.title)
//     console.log('order.gig.description', order.gig._id, order.gig.description)
//     console.log('gig', gig)
//     return gig.title === order.gig.description})

// }}} )
    
       orders = orders.sort((a,b) => b.createdAt - a.createdAt)
       
        return orders
    // console.log('order', orders)
}

async function saveOrder(gigId, loggedinUser){
    try {
       let gig = await httpService.get(`gig/${gigId}`)
    
        const order =        
        {
            
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
        
    // const addedOrder = await storageService.post('order', order)
        const urlToRequest =  'order'
        console.log('urlToRequest', urlToRequest)
        console.log('order', order)
        let addedOrder =  await httpService.post(urlToRequest,order)
        console.log('addedOrder', addedOrder)
        return  addedOrder
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