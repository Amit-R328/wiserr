
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { getById, updateGig } from '../store/actions/gig.actions.js';
import { loadUser } from '../store/actions/user.actions.js';
import { loadOrders } from '../store/actions/order.actions.js'
// import { getByUserId } from '../services/user.service.js'
import { GigReview } from '../cmps/gig-review.jsx';
import { GreenVMark } from '../services/svg.service.js';
import { onSaveOrder } from '../store/actions/order.actions.js'
import ImageGallery from 'react-image-gallery';
import { UserMsg } from '../cmps/user-msg.jsx';
// import {ReviewAdd} from '../cmps/review-add.jsx'
import { socketService } from '../services/socket.service.js';
import mailgo, { mailgoDirectRender } from "mailgo";
import { TumbUpBlack, TumbUpBlue, TumbDownBlack, TumbDownBlue, ContinueArrow } from '../services/svg.service.js';
import { utilService } from '../services/util.service.js'

export const GigDetails = (props) => {
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const { orders } = useSelector((storeState) => storeState.orderModule)
    const [user, setUser] = useState({})
    const [isReviewAdd, setReviewAdd] = useState(false)
    const [tumbUp, setTumbUp] = useState(false)
    const [tumbDown, setTumbDown] = useState(false)
    const [textColorUp, setTextColorUp] = useState('')
    const [textColorDown, setTextColorDown] = useState('')
    const [memberSince, setMemberSince] = useState(2)
    // const [orders, setOrders] = useState({})
    const [subject] = useState("Contact us")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const BLACK = '#404145'
    const BLUE = '#446ee7'
    let { filterBy } = useSelector((storeState) => storeState.gigModule)


    useEffect(() => {
        dispatch(getById(params.gigId))
        //take the page to the begining
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

    // const onGoBack = () => {
    //     props.history.push('/categories')
    // }

    if (!gig) return <h1>Loading</h1>
    let whatYouGet
    if (gig.description && gig.description.whatDoYouGet) {
        whatYouGet = gig.description.whatDoYouGet.split('\n')
    }

    const onConfirmOrder = async (ev, gigId) => {
        if (!loggedInUser) {
            console.log('Need to login')
            navigate('/login')
        } else {
            let order = await dispatch(onSaveOrder(gigId, loggedInUser))
            console.log('orderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',order )
            socketService.emit('new order', order)
            showSuccessMsg('Order was created')

            setTimeout(() => {
                navigate(`/profile/${loggedInUser._id}`)
            }, 2000);
        }
    }

    let price = 0
    if (gig.price) {
        price = gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    const images = gig.imgUrl.map((img) => {
        return { original: img, thumbnail: img }
    })


    const getTumbUp = (ev, gig, idx) => {

        gig.reviews[idx].isHelpful = !gig.reviews[idx].isHelpful
        let flagUp = gig.reviews[idx].isHelpful
        let color
        if (flagUp) {
            color = BLUE
            setTextColorUp(color)
            //if up was pressed and down is blue we change it to black
            gig.reviews[idx].isNotHelpful = false
            color = BLACK
            setTextColorDown(color)
            setTumbDown(false)

        } else {
            color = BLACK
            setTextColorUp(color)
        }
        dispatch(updateGig(gig))
        return setTumbUp(flagUp)
    }

    const getTumbDown = (ev, gig, idx) => {

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



    return (
        <React.Fragment>
            {/* <div className="app-header">
            </div> */}
            <section className="gig-details-container container">
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
                                <p className='owner-order-qty'> {orders.length ? `   ${orders.length} Order in Queue` : ''}</p>
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
                                            {/* <strong>Israel</strong> */}
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

                        {/* {(loggedInUser) ? 
                        <button onClick={() => {setReviewAdd(!isReviewAdd)}} className="add-review-btn">{isReviewAdd ? 'Close' : 'Add Review'}</button> :
                        <h3>Please log in to comment</h3>
                        }
                        {isReviewAdd && <ReviewAdd owner={loggedInUser} gigId={gig._id} setReviewAdd={setReviewAdd}/>} */}
                        {(gig.reviews.length) ? <section className="reviews">

                            <h1 className="gig-reviews-title">Reviews</h1>
                            {gig.reviews.map((review, idx) => {
                                return <article key={review._id}>
                                    <GigReview review={review} />
                                    <div className='tumbs-container'>
                                        <div className="tumbup-btn">
                                            <button className="tumbs-btn" style={{ color: `${review.isHelpful ? BLUE : BLACK}` }} onClick={(ev) => getTumbUp(ev, gig, +idx)}>
                                                {review.isHelpful ? <TumbUpBlue /> : <TumbUpBlack />} Helpful
                                            </button>
                                        </div>
                                        <div className="tumbdown-btn">
                                            <button className="tumbs-btn" style={{ color: `${review.isNotHelpful ? BLUE : BLACK}` }} onClick={(ev) => getTumbDown(ev, gig, +idx)}>
                                                {review.isNotHelpful ? <TumbDownBlue /> : <TumbDownBlack />} Not Helpful
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
        </React.Fragment >
    )
}