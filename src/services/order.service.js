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

async function query(loggedInUser, typeOf) {

    let orders = await httpService.get('order')
    let gigs = await gigService.query();
    if (typeOf === 'getBuys') {
        if (loggedInUser.isSeller) {
            orders = orders.filter(order => {
                return order.buyer.fullName === loggedInUser.userName
            })
        } else {
            orders = orders.filter(order => order.buyer.fullName === loggedInUser.userName)
        }
    } else {
        if (loggedInUser.isSeller) {
            orders = orders.filter(order => {

                return order.seller.fullName === loggedInUser.userName
            })
        } else {
            orders = []
        }
    }

    orders = orders.map(order => {
        return { ...order, gig: { ...order.gig, imgUrl: gigs.find(gig => gig._id === order.gig._id)?.imgUrl[0] } }
    })

    orders = orders.sort((a, b) => b.createdAt - a.createdAt)
    return orders
}

async function saveOrder(gigId, loggedinUser) {
    try {
        let gig = await httpService.get(`gig/${gigId}`)
        const order =
        {
            createdAt: Date.now(),
            deliveryDate: Date.now() + (gig.daysToMake * 86400000),
            buyer: {
                _id: loggedinUser._id,
                fullName: loggedinUser.userName,
                ImgUrl: loggedinUser.imgUrl
            },
            seller: {
                _id: gig.owner._id,
                fullName: gig.owner.fullName,
                imgUrl: gig.owner.imgUrl
            },
            gig: {
                _id: gigId,
                description: gig.title,
                price: gig.price,
                category: gig.category
            },
            status: "pending"
        }

        let addedOrder = await httpService.post('order', order)
        return addedOrder
    } catch (err) {
        console.dir('Cannot save order:', err)
        throw err
    }
}

async function updateOrder(order) {
    try {
        const urlToRequest = `order/${order._id}`
        await httpService.put(urlToRequest, order)
        return order
    } catch (err) {
        console.dir('Cannot update order:', err)
        throw err
    }
}