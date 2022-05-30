
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders } from '../../store/actions/order.actions';
import { userService } from '../../services/user.service.js';
import { getLoggedinUser } from '../../store/actions/user.actions.js';
import { utilService } from '../../services/util.service.js';

export const BusinessDashboard = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())

    let { orders } = useSelector((storeState) => storeState.orderModule)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getLoggedinUser())
        console.log('logged in user@@@@@', loggedInUser)
        let user = {type: 'seller', fullName: loggedInUser.userName}
        dispatch(loadOrders(user))
    }, [])
    

    
    return (
        <div className="b-solutions">
            Hello from business dashboard
            <table className='orders-table' cellpadding="0" cellspacing="0" border="0">
                <thead className='orders-table-header'>
                    <th className='orders-th'>Date</th>
                    <th className='orders-th'>Buyer</th>
                    <th className='orders-th'>Gig</th>
                    <th className='orders-th'>Delivery Date</th>
                    <th className='orders-th'>Amount</th>
                    <th className='orders-th'>Status</th>
                </thead>
                <tbody>
                    {orders.map((order) => <tr>
                            <td>{utilService.setDateTime(order.createdAt)}</td>
                            <td>{order.buyer.fullName}</td>
                            <td>{order.gig.description}</td>
                            <td>{utilService.setDateTime(order.deliveryDate)}</td>
                            {/* <td>{order.gig.price}</td> */}
                            <td>{order.gig.price.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</td>
                            <td>{order.status}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}
