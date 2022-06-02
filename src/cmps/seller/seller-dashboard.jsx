
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders, onUpdateOrder } from '../../store/actions/order.actions';
import { userService } from '../../services/user.service.js';
import { getLoggedinUser } from '../../store/actions/user.actions.js';
import { utilService } from '../../services/util.service.js';

export const SellerDashboard = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    const [totalOrderAmount, setTotalOrderAmount] = useState(0)

    let { orders } = useSelector((storeState) => storeState.orderModule)
    const dispatch = useDispatch()
    const [order, setOrder] = useState('pending')
    
    useEffect(() => {
        dispatch(getLoggedinUser())
        let user = {type: 'seller', fullName: loggedInUser.userName}
        dispatch(loadOrders(loggedInUser))
    }, [])
    
    const handleChange = (ev,order) => {
        
        const value = ev.target.value
        order.status = value        
        setOrder(order)        
        dispatch(onUpdateOrder(order))
    }  

    useEffect(() => {
        
        let totalOrder = orders.reduce((acc, order) => acc + order.gig.price,0)
        setTotalOrderAmount(totalOrder.toFixed(2))       
    })


    return (
        <div className="seller-dashboard-container container">
            <table className='orders-table' cellPadding="0" cellSpacing="0" border="0">
                <thead className='orders-table-header'>
                    <th className='orders-th'>Date</th>
                    <th className='orders-th'>Buyer</th>
                    <th className='orders-th'>Gig</th>
                    <th className='orders-th'>Delivery Date</th>
                    <th className='orders-th'>Amount</th>
                    <th className='orders-th'>Status</th>
                </thead>
                <tbody>
                    {orders.map((order,idx) => <tr key={idx}>                        
                            <td>{utilService.setDateTime(order.createdAt)}</td>
                            <td>{order.buyer.fullName}</td>
                            <td>{order.gig.description}</td>
                            <td>{(order.status === 'approved') && utilService.setDateTime(order.deliveryDate)}</td>
                            {/* <td>{order.gig.price}</td> */}
                            <td>{order.gig.price.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</td>
                            {/* <td>{order.status}</td> */}
                            {/* <td> <select  value={order.status}> */}
                            <td> <select value={order.status} onChange={(ev) => handleChange(ev,order)}>
                                    <option value="approved">approved</option>
                                    <option value="pending">pending</option>
                                    <option value="rejected">rejected</option>
                                </select></td>
                            </tr>)}
                </tbody>
            </table>
            <div className='seller-Total-order'>
                <p>Total order: {totalOrderAmount}</p>
            </div>
        </div>
    )
}
