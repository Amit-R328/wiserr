import { storageService } from "./async-storage.service.js"

const gigChannel = new BroadcastChannel('gigChannel')

export const gigService = {
    query,

}

async function query(user){
    let orders = await storageService.query('orders')
    if(user.type === 'buyer') orders = orders.filter(order => order.buyer.fullName === user.fullName)
    else orders = orders.filter(order => order.seller.fullName === user.fullName)

    return Promise.resolve(orders)
}