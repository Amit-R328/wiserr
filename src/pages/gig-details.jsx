
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { getById, updateGig } from '../store/actions/gig.actions.js';
import { loadUser } from '../store/actions/user.actions.js';
import { loadOrders } from '../store/actions/order.actions.js'
import { GigReview } from '../cmps/gig-review.jsx';
import { GreenVMark } from '../services/svg.service.js';
import { onSaveOrder } from '../store/actions/order.actions.js'
import ImageGallery from 'react-image-gallery';
import { UserMsg } from '../cmps/user-msg.jsx';
import { socketService } from '../services/socket.service.js';
import { ThumbUpBlack, ThumbUpBlue, ThumbDownBlack, ThumbDownBlue } from '../services/svg.service.js';
import { utilService } from '../services/util.service.js'
import Swal from 'sweetalert2'

export const GigDetails = (props) => {
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const { orders } = useSelector((storeState) => storeState.orderModule)
    const [user, setUser] = useState({})
    const [thumbUp, setThumbUp] = useState(false)
    const [thumbDown, setThumbDown] = useState(false)
    const [textColorUp, setTextColorUp] = useState('')
    const [textColorDown, setTextColorDown] = useState('')
    const [memberSince, setMemberSince] = useState(2)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const BLACK = '#404145'
    const BLUE = '#446ee7'

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



    const onConfirmOrder = async (gigId) => {
        if (!loggedInUser) {
            console.log('Need to login')
            navigate('/login')
        } else {
            let order = await dispatch(onSaveOrder(gigId, loggedInUser))
            onUpdateReviewsQty(gigId)

            socketService.emit('new order', order)
            showSuccessMsg('Order accepted')

            setTimeout(() => {
                navigate(`/profile/${loggedInUser._id}`)
            }, 2000);
        }
    }




    const onUpdateReviewsQty = async (gigId) => {
        if (gig.reviewsQty) gig.reviewsQty++
        else gig.reviewsQty = 1

        let newGig = await dispatch(updateGig(gig))
        console.log('newGig', newGig)
    }

    let price = 0
    if (gig.price) {
        price = gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    const images = gig.imgUrl.map((img) => {
        return { original: img, thumbnail: img }
    })

    const getThumbUp = (ev, gig, idx) => {
        gig.reviews[idx].isHelpful = !gig.reviews[idx].isHelpful
        let flagUp = gig.reviews[idx].isHelpful
        let color
        if (flagUp) {
            color = BLUE
            setTextColorUp(color)
            gig.reviews[idx].isNotHelpful = false
            color = BLACK
            setTextColorDown(color)
            setThumbDown(false)

        } else {
            color = BLACK
            setTextColorUp(color)
        }
        dispatch(updateGig(gig))
        return setThumbUp(flagUp)
    }

    const getThumbDown = (ev, gig, idx) => {

        gig.reviews[idx].isNotHelpful = !gig.reviews[idx].isNotHelpful
        let flagDown = gig.reviews[idx].isNotHelpful
        let color
        if (flagDown) {
            color = BLUE
            setTextColorDown(color)
            gig.reviews[idx].isHelpful = false
            color = BLACK
            setTextColorUp(color)
        } else {
            color = BLACK
            setTextColorDown(color)
        }
        dispatch(updateGig(gig))
    }

    const scrollOverview = () => {
        const section = document.querySelector('.gig-details-container');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollDescription = () => {
        const section = document.querySelector('.about-details');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollAbout = () => {
        const section = document.querySelector('.about-seller');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollReviews = () => {
        const section = document.querySelector('.reviews');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const onShareModal = (ev) => {
        // ev.preventDefault()
        Swal.fire({
            className: "share-modal",
            width: 620,
            height: 285,
            padding: '45px',
            color: '#62646',
            background: '#fff',
            backdrop: 'rgba(0,0,0,0.4)',
            title: 'Share This Gig',
            text: 'Spread the word about this Gig on Wiserr',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: '<i className="fa fa-thumbs-up"></i> OK',
            confirmButtonAriaLabel: 'OK',
            allowOutsideClick: true,
            allowEscapeKey: true,
        })
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
                            <li onClick={() => scrollOverview()} className="detail-btn-top">Overview</li>
                            <li onClick={() => scrollDescription()} className="detail-btn-top">Description</li>
                            <li onClick={() => scrollAbout()} className="detail-btn-top">About the Seller</li>
                            <li onClick={() => scrollReviews()} className="detail-btn-top">Review</li>
                            <aside>
                                <button onClick={() => onShareModal()} className="details-menu-share">Share</button>
                            </aside>
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
                                <ImageGallery showThumbnails={false} showPlayButton={false} items={images} />
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
                                            Member Since
                                            <strong>{`${memberSince > 2 ? memberSince : 2} month ago`}</strong>
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
                                        <div className="owner-summary">Hello I am Freelance Graphic Design and Illustrator based in Israel, I have working in graphic design industry for almost 6 years.</div>

                                    </article>
                                </div>
                            </article>
                        </section>

                        {(gig.reviews.length) ? <section className="reviews">

                            <h1 className="gig-reviews-title">Reviews</h1>
                            {gig.reviews.map((review, idx) => {
                                return <article key={review._id}>
                                    <GigReview review={review} />
                                    <div className='thumbs-container'>
                                        <div className="thumbup-btn">
                                            <button className="thumbs-btn" style={{ color: `${review.isHelpful ? BLUE : BLACK}` }} onClick={(ev) => getThumbUp(ev, gig, +idx)}>
                                                {review.isHelpful ? <ThumbUpBlue /> : <ThumbUpBlack />} Helpful
                                            </button>
                                        </div>
                                        <div className="thumbdown-btn">
                                            <button className="thumbs-btn" style={{ color: `${review.isNotHelpful ? BLUE : BLACK}` }} onClick={(ev) => getThumbDown(ev, gig, +idx)}>
                                                {review.isNotHelpful ? <ThumbDownBlue /> : <ThumbDownBlack />} Not Helpful
                                            </button>
                                            {review.isHelpful && <p className='helpful-text'>You found this review helpful.</p>}
                                        </div>
                                    </div>
                                </article>
                            })}
                        </section> : <span></span>}
                    </div>
                    <div className="sticky-outer-wrapper-gig-buy">
                        <div className="sticky-inner-wrapper-gig-buy">
                            <aside className="sidebar-content">
                                <div className="call-to-action">
                                    <div className="price-package">Our Offer</div>
                                    <div className="order-title-wrapper flex flex-column">
                                        <div className="order-price flex"><div className="total-price">Total</div><div>{price}</div></div>
                                        <div className="order-subtitle">{gig.title}</div>
                                        <p className='days-to-make'><b>{` ${gig.daysToMake} ${gig.daysToMake === "1" ? "Day Delivery" : "Days Delivery"}`}</b></p>

                                        {gig.description.littleDetails && <dl className="description-little-details"> {gig.description.littleDetails.map((detail, idx) => <dt className='littleDetails' key={idx}><GreenVMark />{detail}</dt>)}</dl>}

                                        <footer className='buy-btn-container'>
                                            <button className="buy-btn" onClick={(ev) => onConfirmOrder(ev, gig._id)}>Continue <span></span>
                                            </button>
                                        </footer>
                                    </div>
                                </div>
                            </aside>
                            <div className="contact-seller flex">
                                <a className='gig-details-contact-seller' href="mailto:wiserrseller@mailgo.com">Contact Seller</a>
                            </div>
                        </div>
                    </div>
                </div>
                <UserMsg />
            </section >
        </>
    )
}
