

import { gigService } from '../services/gig.service.js';
import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { getById } from '../store/actions/gigs.actions.js';
import { GigReview } from '../cmps/gig-review.jsx';
import { AppHeader } from '../cmps/headers/app-header.jsx'
import { CategoriesNavHeader } from '../cmps/headers/categories-nav-header.jsx'
import { GreenVMark } from '../services/svg.service.js';
import { onSaveOrder } from '../store/actions/order.actions.js'

export const GigDetails = (props) => {

    // const { user } = useSelector((storeState) => storeState.userModule)
    // const {toys} = useSelector((storeState) =>  storeState.toyModule)
    const { gig } = useSelector((storeState) => storeState.gigModule)
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
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


    const closeOrder = (ev, gigId) => {
        console.log('gigId',gigId )
        console.log('loggedInUser', loggedInUser)
        if(!loggedInUser){
            console.log('in')
            showSuccessMsg('Need go login')
        } else {
            dispatch(onSaveOrder(gigId, loggedInUser))
        }
    }

    let price = 0
    if( gig.price) {
        price = gig.price.toLocaleString('en-US', {style: 'currency',currency: 'USD'})
    }
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
                            <div className="owner-details">
                                <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="" /> &nbsp;
                                <p className="owner-name">&nbsp;{gig.owner.fullName} &nbsp;</p>
                            </div>
                            <div className="img-container">
                                <img className="gig-details-img img" src={`${gig.imgUrl[0]}`} alt="" />
                            </div>
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
                                        {gig.description.littleDetails && <dl> {gig.description.littleDetails.map((detail,idx) => <dt className='littleDetails' key={idx}><GreenVMark />{detail}</dt>)}</dl>}

                                        <footer>
                                            <button className="buy-btn" onClick={(ev) => closeOrder(ev,gig._id)}>Continue ( {price} )</button>
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