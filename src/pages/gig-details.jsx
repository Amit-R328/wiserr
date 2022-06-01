
import { gigService } from '../services/gig.service.js';
import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { getById } from '../store/actions/gig.actions.js';
import { GigReview } from '../cmps/gig-review.jsx';
import { AppHeader } from '../cmps/headers/app-header.jsx'
import { CategoriesNavHeader } from '../cmps/headers/categories-nav-header.jsx'
import { GreenVMark } from '../services/svg.service.js';
import { onSaveOrder } from '../store/actions/order.actions.js'
import  Sliders  from '../cmps/carousel-list-details/sliders.js';
import ImageGallery from 'react-image-gallery';
// import { useNavigate } from 'react-router-dom'

export const GigDetails = (props) => {

    // const { user } = useSelector((storeState) => storeState.userModule)
    // const {toys} = useSelector((storeState) =>  storeState.toyModule)
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    
    const navigate = useNavigate()
    // const { reviews } = useSelector((storeState) => storeState.reviewModule)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getById(params.gigId))
    }, [params])

    const onGoBack = () => {
        props.history.push('/categories')
    }

    if (!gig) return <h1>Loading</h1>

    let whatYouGet
    if (gig.description && gig.description.whatDoYouGet) {
        whatYouGet = gig.description.whatDoYouGet.split('\n')
    }


    const onConfirmOrder = (ev, gigId) => {
        // console.log('gigId', gigId)
        // console.log('loggedInUser', loggedInUser)
        if (!loggedInUser) {
            // console.log('in')
            showSuccessMsg('Need go login')
        } else {
            dispatch(onSaveOrder(gigId, loggedInUser))
            navigate(`/profile/${loggedInUser._id}`)
        }
    }

    let price = 0
    if (gig.price) {
        price = gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
const images = gig.imgUrl.map((img) => {
    return {original: img,thumbnail:img}
})
    return (
        <React.Fragment>
            <div className="app-header">
                <div className="main-header sticky">
                    {/* {offset ?
                        <CategoriesNavHeader style={{ visibility: 'visible' }}
                            onChangeCategory={onChangeCategory} />
                            : <CategoriesNavHeader style={{ visibility: 'hidden' }}
                        onChangeCategory={onChangeCategory} />} */}
                    <AppHeader />
                    <CategoriesNavHeader />
                </div>
            </div>
            <section className="gig-details-container">
                <div className="gig-details">
                    <div className="left-container">
                        <section className="gig-info">
                            <h3 className="text-display">{gig.title}</h3>
                            <div className="owner-details owner-container" >
                                <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="" /> &nbsp;
                                <p className="owner-name">&nbsp;{gig.owner.fullName} &nbsp;</p>
                                
                            </div>
                            {/* <Sliders/> */}
                            <div>
                                <ImageGallery showThumbnails={false} showPlayButton={false} items={images} />    
                            </div>
                            {/* <div className="img-container">
                                <img className="gig-details-img img" src={`${gig.imgUrl[0]}`} alt="" />
                            </div> */}
                        </section>
                        <section className="about-details">
                            <h2 className="about-title">About this Gig</h2>
                            <p className="about-this-gig">{gig.description.aboutThisGig}</p>
                            <br />
                            {whatYouGet && <h3 className='about-get'>What Do You Get</h3>}
                            {/* {gig.description.whatDoYouGet} && <p className="what-do-you-get"> */}
                            <dl className="what-do-you-get">

                                {whatYouGet && whatYouGet.map(line => <dd key={line}>{line}</dd>)}
                            </dl>
                            {/* </p> */}
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
                                            <strong>Israel</strong>
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
                        {(gig.reviews.length) ? <section className="reviews">

                            {gig.reviews.map(review => {
                                return <article key={review._id}>
                                    <GigReview review={review} />
                                </article>
                            })}
                        </section> : <p>Be the first to review</p>}
                    </div>

                    <div className="sticky-outer-wrapper-gig-buy">
                        <div className="sticky-inner-wrapper-gig-buy">
                            <aside className="sidebar-content">
                                {/* <div className="packages-tabs triple"> */}
                                {/* <input id="package-tab-1" name="package-tab-group" type="radio" checked=""> */}
                                {/* <input id="package-tab-2" name="package-tab-group" type="radio"> */}
                                {/* <input id="package-tab-3" name="package-tab-group" type="radio"> */}
                                {/* <div className="nav-container">
                                 <label for="package-tab-1">Basic</label>
                                 <label for="package-tab-2" className="">Standard</label>
                                 <label for="package-tab-3" className="">Premium</label> */}
                                {/* </div> */}
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
                                            {/* ( {price} ) */}
                                                {/* <span className='buy-btn-span' >
                                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z">
                                                        </path></svg></span> */}
                                            </button>
                                        </footer>
                                    </div>

                                    <button className="contact-seller">Contact Seller</button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section >
        </React.Fragment >
    )

}