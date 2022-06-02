import { orderService } from '../../services/order.service.js'

export function loadOrders(loggedInUser, typeOf) {
    console.log('loggedInUser', loggedInUser)
    console.log('typeOf',typeOf )
    return async dispatch => {
        try {
            const orders = await orderService.query(loggedInUser, typeOf)
            const action = { type: 'SET_ORDERS', orders }
            dispatch(action)
        } catch (err) {
            console.error('Error:', err)
        }
    }
}

export function onSaveOrder(gigId, loggedinUser) {
    return async (dispatch) => {
        try {
            const order = await orderService.saveOrder(gigId, loggedinUser)
            const action = { type: 'SET_ORDER', order }
            dispatch(action)
        } catch (err) {
            console.log('Cannot login', err)
        }
    }
}