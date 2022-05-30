import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const orderChannel = new BroadcastChannel('orderChannel')

export const orderService = {
    query,
    saveOrder
}

async function query(user){
    console.log('User', user)
    let orders = await storageService.query('order')
    console.log('orders', orders)
    // for(var i=0;i< orders.length;i++){

    //     console.log('order buyer', orders[i].buyer)
    //     // console.log('order seller', orders[i].seller.fullName)
    // }
    if(user.type === 'buyer') orders = orders.filter(order => order.buyer.fullName === user.fullName)
    
    else orders = orders.filter(order => {
        console.log('order.seller.fullname', order.seller.fullName, 'user.username', user.fullName )
       return order.seller.fullName === user.fullName})
    console.log('order', orders)
    return orders
}

async function saveOrder(gigId, loggedinUser){
    console.log('loggedinUser', loggedinUser)
    let gig = await storageService.get('gig',gigId)
    console.log('gig', gig)
    const seller = await storageService.get('user',gig.owner._id)
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
    console.log('order', order)
    const addedOrder = await storageService.post('order', order)
    return order
}