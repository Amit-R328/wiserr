
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders } from '../../store/actions/order.actions';


export const BusinessDashboard = (props) => {
    const { orders } = useSelector((storeState) => storeState.orderModule)
    const { loggedInUser } = userSelector((storeState) => storeState.)
    const dispatch = useDispatch()
    
    useEffect(() => {
        let user = {type: 'seller', fullName: loggedInUser.[type].fullName}
        dispatch(loadOrders(filterBy))
    }, [])



    return (
        <div className="b-solutions">
            Hello from business dashboard
            <table className='orders-table'>
                <thead className='orders-table-header'>
                    <th className='orders-th'>Date</th>
                    <th className='orders-th'>Buyer</th>
                    <th className='orders-th'>Gig</th>
                    <th className='orders-th'>DeliveryDate</th>
                    <th className='orders-th'>Amount</th>
                    <th className='orders-th'>Status</th>
                </thead>
                <tbody>
                    <td></td>
                </tbody>
            </table>
        </div>
    )
}