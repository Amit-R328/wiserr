import { storageService } from "./async-storage.service.js"

const orderChannel = new BroadcastChannel('orderChannel')

export const orderService = {
    query,

}

async function query(user){
    console.log('User', user)
    let orders = await storageService.query('orders')
    
    if(user.type === 'buyer') orders = orders.filter(order => order.buyer.fullName === user.fullName)
    
    else orders = orders.filter(order => {
        console.log('order.seller.fullname', order.seller.fullName, 'user.username', user.fullName )
       return order.seller.fullName === user.fullName})
    console.log('orders', orders)
    return orders
}