import {orderService} from '../../services/order.service.js'

export function loadOrders(loggedInUser){
    console.log('loggedInUser', loggedInUser)
    return async dispatch => {
        try {
            const orders = await orderService.query(loggedInUser)
            console.log('orders', orders)
            const action = {type: 'SET_ORDERS', orders}
            console.log('action', action)
            dispatch(action)               
        } catch(err) {
            console.error('Error:', err)
        }
    }
}



export function onSaveOrder(gigId, loggedinUser) {
    return async (dispatch) => {
        try {               
            console.log('gigId',gigId )
            console.log('loggedinUser', loggedinUser)

            const order = await orderService.saveOrder(gigId, loggedinUser)
            console.log('order', order)
            const action = {type: 'SET_ORDER', order}
            console.log('action', action)
            dispatch(action)                           
        } catch (err) {
            console.log('Cannot login', err)
        }
    }
}