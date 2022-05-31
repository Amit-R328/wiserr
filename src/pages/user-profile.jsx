import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders } from '../store/actions/order.actions.js';
import { userService } from '../services/user.service.js';
import { getLoggedinUser } from '../store/actions/user.actions.js';

export const UserProfile = () => {

    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    let { orders } = useSelector((storeState) => storeState.orderModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLoggedinUser())
        console.log('logged in user@@@@@', loggedInUser)
        let user = { type: 'buyer', fullName: loggedInUser.userName }
        dispatch(loadOrders(loggedInUser))
    }, [orders])


    return (
        <section className='user-profile'>
            <div className='profile-left-container'>
                <div className='profile-img-user'>
                    <img className='profile-usr-img' src={user.imgUrl} alt="img" />
                    <h1>{user.fullName}</h1>
                </div>
            </div>
            <div className='profile-right-container'>
                {(orders) ?
                    <div>
                        <h1>Your orders:</h1>
                        <ul>{orders.map(order => <li key={order._id}>{order.gig.description}</li>)}</ul>
                    </div> : 
                    (<span></span>)}
            </div>
        </section>
    )
}