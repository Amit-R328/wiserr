import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders } from '../store/actions/order.actions.js';
import { userService } from '../services/user.service.js';
import { getLoggedinUser } from '../store/actions/user.actions.js';
import { utilService } from '../services/util.service.js';

export const UserProfile = () => {

    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    let { orders } = useSelector((storeState) => storeState.orderModule)
    const dispatch = useDispatch()

    useEffect(() => {
        let user = { type: 'buyer', fullName: loggedInUser.userName }
        dispatch(loadOrders(loggedInUser,'getBuys'))
        // console.log(orders)
        orders = orders.filter(order => order.seller !== loggedInUser.userName)
        
    }, [])

    console.log('orders from user-profile', orders)


    return (
        <section className='user-profile-layout'>
            <section className='user-profile flex'>
                <div className='profile-left-container'>
                    <div className='profile-img-user flex'>
                        <img className='profile-usr-img' src={user.imgUrl} alt="img" />
                        <h1>userName: {user.userName}</h1>
                    </div>
                </div>
                <div className='profile-right-container'>
                    {(orders.length) ?
                        <div className='user-profile-card'>
                            <h1>Your orders:</h1>
                            {orders.map(order => <div  className='order-card flex' key={order._id}><h4>{order.gig.description}</h4>
                                <label>Seller: <h5>{order.seller.fullName}</h5></label>
                                <h5>{order.gig.price}</h5>
                                <h5>{order.status}</h5>
                                <h5>{utilService.setDateTime(order.createdAt)}</h5>
                                <h5>{utilService.setDateTime(order.deliveryDate)}</h5></div>)}
                        </div> :
                        (<h1>You don't have any orders yet!</h1>)}
                </div>
            </section>
        </section>
    )
}