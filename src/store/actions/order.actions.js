import {orderService} from '../../services/order.service.js'

export function loadOrders(user){
    return async dispatch => {
        try {
            const orders = await orderService.query(user)
            const action = {type: 'SET_ORDERS', orders}
            dispatch(action)                
        } catch(err) {
            console.error('Error:', err)
        }
    }
}