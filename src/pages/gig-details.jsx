
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  showSuccessMsg ,showErrorMsg } from '../services/event-bus.service.js'
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
import { TumbUpBlack, TumbUpBlue, TumbDownBlack, TumbDownBlue } from '../services/svg.service.js';

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
    // const [orders, setOrders] = useState({})
    const [subject] = useState("Contact us")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const BLACK = '#404145'
    const BLUE = '#446ee7'

    useEffect(() => {
        dispatch(getById(params.gigId))
        
    }, [params])


    useEffect(() => {
        if(gig){            
            getUserAndOrders()             
    
        }
    }, [gig])


    const getUserAndOrders = async () => {
        const userId = gig.owner._id
        const user = await loadUser(userId)
        dispatch(loadOrders(user, 'seller'))
        setUser(user)
    }


    const onGoBack = () => {
        props.history.push('/categories')
    }

    if (!gig) return <h1>Loading</h1>
    let whatYouGet
    if (gig.description && gig.description.whatDoYouGet) {
        whatYouGet = gig.description.whatDoYouGet.split('\n')
    }

    const onConfirmOrder = (ev, gigId) => {
        if (!loggedInUser) {
            console.log('Need to login')
            navigate('/login')
            // showErrorMsg('Need to login')
        } else {
            dispatch(onSaveOrder(gigId, loggedInUser))
            console.log('Order was created' )
            showSuccessMsg('Order was created')
            // const msgInterval = setInterval(showSuccessMsg('Order was created'), 4000);
            // clearInterval(msgInterval);

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
    
    
    const getTumbUp =(ev,gig,idx) => {
              
        gig.reviews[idx].isHelpful = !gig.reviews[idx].isHelpful 
        let flagUp = gig.reviews[idx].isHelpful
        let color
        if(flagUp){
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

    const getTumbDown =(ev,gig,idx) => {
       
        gig.reviews[idx].isNotHelpful = !gig.reviews[idx].isNotHelpful 
        let flagDown = gig.reviews[idx].isNotHelpful
        let color
        if(flagDown) {
            color = BLUE
            setTextColorDown(color)
            gig.reviews[idx].isHelpful = false
            color = BLACK
            setTextColorUp(color)
          }  else {
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
                        <section className="gig-info">
                            <h3 className="text-display">{gig.title}</h3>
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
                            <h2 className="about-title">About this Gig</h2>
                            <p className="about-this-gig">{gig.description.aboutThisGig}</p>
                            <br />
                            {whatYouGet && <h3 className='about-get'>What Do You Get</h3>}
                            <dl className="what-do-you-get">

                                {whatYouGet && whatYouGet.map(line => <dd key={line}>{line}</dd>)}
                            </dl>
                            <article className="about-seller">
                                <p className="about-title">About The Seller</p>
                                <div className="owner-card">
                                    <img className="md-round-img" src={`${gig.owner.imgUrl}`} alt="" />
                                    <div className="owner-card-right">
                                        <p>{gig.owner.fullName}</p>
                                        <p><i className="fa fa-star filled">
                                            <i className="fa fa-star filled">
                                                <i className="fa fa-star filled">
                                                    <i className="fa fa-star filled">
                                                        <i className="fa fa-star filled">
                                                            5</i></i></i></i></i>

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
                                            <strong>2 month ago</strong>
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

                            {gig.reviews.map((review,idx) => {
                                return <article key={review._id}>
                                    <GigReview review={review} />
                                    <div className='tumbs-container'>
                                        <div className="tumbup-btn">
                                            <button className="tumbs-btn"  style={{ color: `${review.isHelpful ? BLUE : BLACK}`}} onClick={(ev) => getTumbUp(ev, gig, +idx)}>
                                            {review.isHelpful ? <TumbUpBlue /> : <TumbUpBlack />} Helpful
                                        </button>
                                    </div>
                                    <div className="tumbdown-btn">
                                        <button className="tumbs-btn" style={{ color: `${review.isNotHelpful ? BLUE : BLACK}`}} onClick={(ev) => getTumbDown(ev, gig, +idx)}>                                            
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
                                    <div className="price-package">Special Offer</div>
                                    <div className="order-title-wrapper">
                                        <span className="order-price">{price}</span>
                                        <p className="order-subtitle">{gig.title}</p>
                                        <p className='days-to-make'><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>
                                            <b>{` ${gig.daysToMake} Days Delivery`}</b></p>

                                        {gig.description.littleDetails && <dl> {gig.description.littleDetails.map((detail, idx) => <dt className='littleDetails' key={idx}><GreenVMark />{detail}</dt>)}</dl>}

                                        <footer className='buy-btn-container'>
                                            <button className="buy-btn" onClick={(ev) => onConfirmOrder(ev, gig._id)}>Continue <span className='buy-btn-arrow'>&#x2192;</span>
                                            </button>
                                        </footer>
                                    </div>
                                    <div className='contact-seller'>
                                    <a href="mailto:wiserrseller@mailgo.com">Contact Seller</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                <UserMsg />
            </section >
        </React.Fragment >
    )
}