
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { getById, updateGig } from '../store/actions/gig.actions.js'
import { loadUser } from '../store/actions/user.actions.js'
import { loadOrders } from '../store/actions/order.actions.js'
import { GigReview } from '../cmps/gig-review.jsx'
import { GreenVMark } from '../services/svg.service.js'
import { onSaveOrder } from '../store/actions/order.actions.js'
import ImageGallery from 'react-image-gallery'
import { UserMsg } from '../cmps/user-msg.jsx'
import { socketService } from '../services/socket.service.js'
import { ThumbUpBlack, ThumbUpBlue, ThumbDownBlack, ThumbDownBlue } from '../services/svg.service.js'
import { utilService } from '../services/util.service.js'
import { AddReview } from '../cmps/add-review.jsx'
import Swal from 'sweetalert2'

export const EditGig = (props) => {
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const { orders } = useSelector((storeState) => storeState.orderModule)
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const sections = [
        {
            sectionElement: '.gig-details-container',
            sectionTitle: 'Overview'
        },
        {
            sectionElement: '.about-details',
            sectionTitle: 'Description'
        },
        {
            sectionElement: '.about-seller',
            sectionTitle: 'About the Seller'
        },
        {
            sectionElement: '.reviews',
            sectionTitle: 'Reviews'
        }
    ]
    
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
    }

    const onScroll = (el) => {
        const section = document.querySelector(el)
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }


    if (!gig) return <h1>Loading</h1>
    let whatYouGet
    if (gig.description && gig.description.whatDoYouGet) {
        whatYouGet = gig.description.whatDoYouGet.split('\n')
    }
    
    return (
            <section className="edit-gig-details-container container">
                <div className="box">
                <h1>Hello</h1>

                </div>
            </section >
    )
}
