
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { utilService } from '../services/util.service.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { socketService } from '../services/socket.service.js'
import { getById, updateGig } from '../store/actions/gig.actions.js'
import { loadUser } from '../store/actions/user.actions.js'
import { loadOrders } from '../store/actions/order.actions.js'
import { onSaveOrder } from '../store/actions/order.actions.js'
import { UserMsg } from '../cmps/user-msg.jsx'

import { GigDetailsHeader } from '../cmps/gig-details/gig-details-header.jsx'
import { GigDetailsSellerInfo } from '../cmps/gig-details/gig-details-seller-info.jsx'
import { GigDetailsDescription } from '../cmps/gig-details/gig-details-description.jsx'
import { GigDetailsAboutSeller } from '../cmps/gig-details/gig-details-about-seller.jsx'
import { GigDetailsReviewList } from '../cmps/gig-details/gig-details-review-list.jsx'
import { GigDetailsOurOffer } from '../cmps/gig-details/gig-details-our-offer.jsx'

export const GigDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()    
    const params = useParams()
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const { orders } = useSelector((storeState) => storeState.orderModule)
    const { order } = useSelector((storeState) => storeState.orderModule)
    const [user, setUser] = useState({})  
    const [isToggleAddReview, setAddReview] = useState(false)
    const [memberSince, setMemberSince] = useState()
    
    useEffect(() => {
        dispatch(getById(params.gigId))
        window.scrollTo(0, 0)
    }, [params])

    useEffect(() => {
        if (gig) {
            getUserAndOrders()
        }
    }, [gig])

    const getUserAndOrders = async () => {
        const userId = gig.owner._id
        const user = await loadUser(userId)
        dispatch(loadOrders(user, 'seller'))
        setUser(user)
        calcMemberSince()
    }


    const onConfirmOrder = async (ev, gigId) => {
        if (!loggedInUser) {
            navigate('/login')
        } else {
            await dispatch(onSaveOrder(gigId, loggedInUser))                 
            onUpdateReviewsQty()
            socketService.emit('new order', order)
            showSuccessMsg('Order accepted')
            setTimeout(() => {
                navigate(`/profile/${loggedInUser._id}`)
            }, 2000)
        }
    }

    const onUpdateReviewsQty = async () => {
        if (gig.reviewsQty) gig.reviewsQty++
        else gig.reviewsQty = 1
        await dispatch(updateGig(gig))
    }
    


    const calcMemberSince = () => {
        if (orders.length) {
            let orderCreatedDate = orders[orders.length - 1].createdAt
            orderCreatedDate = utilService.getMonthNumber(orderCreatedDate)
            const thisMonth = (new Date()).getMonth()
            let calcSince = 0
            if (orderCreatedDate > thisMonth) calcSince = (12 - orderCreatedDate) + thisMonth
            else calcSince = thisMonth - orderCreatedDate
            setMemberSince(Math.abs(calcSince))
        }
    }

    const getThumb = (ev, gig, idx, type) => {
        if(type === "up"){
            gig.reviews[idx].isHelpful = !gig.reviews[idx].isHelpful
            let flagUp = gig.reviews[idx].isHelpful
            if (flagUp) gig.reviews[idx].isNotHelpful = false
        } else {
            gig.reviews[idx].isNotHelpful = !gig.reviews[idx].isNotHelpful
            let flagDown = gig.reviews[idx].isNotHelpful        
            if (flagDown) gig.reviews[idx].isHelpful = false
        }
        
        dispatch(updateGig(gig))        
    }

    const onAddReview = () => {
        if(!loggedInUser) navigate('/login')
        else setAddReview(!isToggleAddReview)
    }


    if (!gig) return <h1>Loading</h1>
   
    
    return (
        <>
            <section className="gig-details-container container">
               <GigDetailsHeader gig={gig}/>
                <div className="gig-details">
                    <div className="left-container">
                        <section className="breadcrumbs-container flex">
                            <ul className="breadcrumbs">
                                <li>
                                    <a href="/categories"><span>Wiserr</span>{gig.category}</a>
                                </li>
                            </ul>
                        </section>
                        <GigDetailsSellerInfo gig={gig} user={user} orders={orders}/>

                        <section className="about-details">
                            <GigDetailsDescription gig={gig}/>
                            <GigDetailsAboutSeller orders={orders} gig={gig} memberSince={memberSince}/>                           
                        </section>
                    <GigDetailsReviewList onAddReview={onAddReview} loggedInUser={loggedInUser} setAddReview={setAddReview} 
                    gig={gig} isToggleAddReview={isToggleAddReview}  getThumb={getThumb}/>

                    </div>
                    <GigDetailsOurOffer gig={gig} onConfirmOrder={onConfirmOrder}/>                    
                </div>
                <UserMsg />
            </section >
        </>
    )
}
