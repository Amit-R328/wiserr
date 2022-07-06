
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
        <>
            <section className="gig-details-container container">
                <div className="nav-details-container">
                    <nav className="details-menu-scroll">
                        <ul className="nav-details-sections">
                            {sections.map(section =>
                                <li onClick={() => onScroll(section.sectionElement)} key={section.sectionTitle}>{section.sectionTitle}</li>)}
                        </ul>
                    </nav>
                </div>
                <div className="gig-details">
                    <div className="left-container">
                        <section className="breadcrumbs-container flex">
                            <ul className="breadcrumbs">
                                <li>
                                    <a href="/categories"><span>Wiserr</span>{gig.category}</a>
                                </li>
                            </ul>
                        </section>
                        <section className="gig-info">
                            <h1 className="text-display">{gig.title}</h1>
                            <div className="owner-details owner-container" >
                                <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="" /> &nbsp;
                                <p className="owner-name">&nbsp;{gig.owner.fullName} &nbsp;</p>
                                <p className='owner-level'>{user.level ? user.level : 'Level 1 Seller '}&nbsp;| </p>
                                <p className='owner-order-qty'> {orders.length ? `   ${orders.length} Order in Queue |` : ''}</p>
                                <div className="gig-rate">
                                    {gig.reviews.length ? <div className="avg-rate">{((gig.reviews.reduce((acc, review) => acc + (review.stars), 0)) / gig.reviews.length).toFixed(1)}<p className="rate-reviews-qty">({gig.reviewsQty})</p></div> :
                                        <div className="avg-rate">4.9</div>}
                                </div>

                            </div>
                            <div className="gig-details-img-container">
                                <ImageGallery showThumbnails={false} showPlayButton={false}  />
                            </div>
                        </section>
                        <section className="about-details">
                            <h2 className="about-title">About This Gig</h2>
                            {gig.description.aboutThisGig && <p className="about-this-gig">{gig.description.aboutThisGig}</p>}

                            {whatYouGet && <h3 className='about-get'>What Do You Get:</h3>}
                            <dl className="what-do-you-get">

                                {whatYouGet && whatYouGet.map(line => <dd key={line}>{line}</dd>)}
                            </dl>

                            {gig.description.whyUs && <h3 className="gig-details-whyus">Why us: </h3>}
                            {gig.description.whyUs && <p className="about-this-gig">{gig.description.whyUs}</p>}

                            <article className="about-seller">
                                <p className="about-title">About The Seller</p>
                                <div className="owner-card">
                                    <img className="md-round-img" src={`${gig.owner.imgUrl}`} alt="" />
                                    <div className="owner-card-right">
                                        <p className="gig-details-owner-name">{gig.owner.fullName}</p>
                                        {gig.owner.tagline && <p className="gig-details-owner-tagline">{gig.owner.tagline}</p>}
                                        <p><i className="fa fa-star filled">
                                            <i className="fa fa-star filled">
                                                <i className="fa fa-star filled">
                                                    <i className="fa fa-star filled">
                                                        <i className="fa fa-star filled">
                                                            &nbsp; 5</i></i></i></i></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="owner-info">
                                    <ul className="info-left flax">
                                        <li>
                                            From
                                            <strong>{gig.owner.from}</strong>
                                        </li>
                                        <li>
                                            Avg response time
                                            <strong>3 hours</strong>
                                        </li>
                                        <li>
                                            Last Delivery
                                            <strong>About 2 Hours ago</strong>
                                        </li>
                                    </ul>
                                    <article className="seller-description">
                                        <div className="owner-summary">Hello, I am a freelancer who have been working in this industry for almost 6 years. I am open to different challenges and opportunities</div>
                                    </article>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
                <UserMsg />
            </section >
        </>
    )
}
