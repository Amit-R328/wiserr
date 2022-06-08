import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { loadOrders } from '../store/actions/order.actions.js';
import { userService } from '../services/user.service.js';
import { utilService } from '../services/util.service.js';
import { Loader } from '../cmps/loader.jsx';

export const UserProfile = () => {

    const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser())
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    let { orders } = useSelector((storeState) => storeState.orderModule)
    const [ordersTotal, setOrdersTotal] = useState(0)
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    const RED = '#F74040'
    const GRAY = '#62646A'
    const GREEN = '#1DBF73'
    const BLACK = '#404145'

    useEffect(() => {

        dispatch(loadOrders(loggedInUser, 'getBuys'))
        setTimeout(() => {
            setLoader(false)
        }, 3000)

        orders = orders.filter(order => order.seller !== loggedInUser.userName)
    }, [])

    let totals = orders.reduce(((acc, curr) => acc + curr.gig.price), 0)
    console.log('totals', totals)
    console.log('orders from user-profile', orders)

    const totalAmount = totals.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    return (
        <section className='user-profile-layout container'>
            {loader && <Loader />}
            <section className='user-profile flex'>

                <div className='profile-right-container'>
                    {(orders.length) ?
                        <div className='user-profile-card'>
                            <div className='your-orders-container'>
                                <h1>Total orders amount: <span>{`${totalAmount}`}</span></h1>

                            </div>

                            {orders.map(order => <div className='order-card' key={order._id}><h4 className='order-desc-profile'>{order.gig.description}</h4>

                                <img className='gig-img-profile' alt="" src={order.gig.imgUrl} />
                                <div className='card-profile-info'>
                                    <h5>Seller: {order.seller.fullName}</h5>
                                    <h5>Amount: {order.gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h5>
                                    <h5>Status: <span style={{ color: `${order.status === 'rejected' ? RED : order.status === 'completed' ? GREEN : order.status === 'approved' ? BLACK : GRAY}` }}>{order.status}</span></h5>
                                    <h5>Created Date: {utilService.setDateTime(order.createdAt)}</h5>
                                    <h5>Delivery Date: {(order.status === 'completed') && utilService.setDateTime(order.deliveryDate)}</h5>
                                </div>
                            </div>)}
                        </div> :
                        (<h1>You don't have orders yet!</h1>)}
                </div>

            </section>
        </section>
    )
}