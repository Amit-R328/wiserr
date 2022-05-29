

import { gigService } from '../services/gig.service.js';
import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getById } from '../store/actions/gigs.actions.js';
import { GigReview } from '../cmps/gig-review.jsx';


export const GigDetails = (props) => {

    // const { user } = useSelector((storeState) => storeState.userModule)
    // const {toys} = useSelector((storeState) =>  storeState.toyModule)
    const { gig } = useSelector((storeState) => storeState.gigModule)
    // const { reviews } = useSelector((storeState) => storeState.reviewModule)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getById(params.gigId))
    }, [params])

    const onGoBack = () => {
        props.history.push('/categories')
    }

    // if (!gig) return <h1>Loading</h1>
    // console.log('Gig:', gig._id)
    // let whatYouGet
    // if (gig.description.whatDoYouGet) {

    //     whatYouGet = gig.description.whatDoYouGet.split('\n')
    // }

    // return (
    //     <React.Fragment>
    //         <div className="app-header">
    //             <div className="main-header sticky">
    //                 {/* {offset ?
    //                     <CategoriesNavHeader style={{ visibility: 'visible' }}
    //                         onChangeCategory={onChangeCategory} />
    //                     : <CategoriesNavHeader style={{ visibility: 'hidden' }}
    //                         onChangeCategory={onChangeCategory} />} */}
    //                 <AppHeader />
    //                 <span className="line-sep"></span>
    //                 <CategoriesNavHeader />
    //                 <span className="line-sep"></span>
    //             </div>
    //         </div>
    //         <section className="gig-details flex">
    //             <div className="left-container">
    //                 <section className="gig-info">
    //                     <h3 className="text-display">{gig.title}</h3>
    //                     <div className="owner-details flex">
    //                         <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="" /> &nbsp;
    //                         <p className="owner-name">&nbsp;{gig.owner.fullName} &nbsp;</p>
    //                     </div>
    //                     <div className="img-container">
    //                         <img className="gig-details-img img" src={`${gig.imgUrl[0]}`} alt="" />
    //                     </div>
    //                 </section>
    //                 <section className="about-details">
    //                     <h2 className="about-title">About this Gig</h2>
    //                     <p className="about-this-gig">{gig.description.aboutThisGig}</p>
    //                     <br />
    //                     {gig.description.whatDoYouGet} && <p className="what-do-you-get">
    //                         <dl>

    //                             {whatYouGet && whatYouGet.map(line => <dd>{line}</dd>)}
    //                         </dl>
    //                     </p>
    //                     <article className="about-seller">
    //                         <p className="about-title">About The Seller</p>
    //                         <div className="owner-card flex">
    //                             <img className="md-round-img" src={`${gig.owner.imgUrl}`} alt="" />
    //                             <div className="owner-card-right flex">
    //                                 <p>{gig.owner.fullName}</p>
    //                                 <p><i className="fa fa-star filled">

    
    let whatYouGet = gig.description.whatDoYouGet.split('\n')
    

    return (
        <section className="gig-details flex">
            <div className="left-container">
                <section className="gig-info">
                    <h3 className="text-display">{gig.title}</h3>
                    <div className="owner-details flex">
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
                    {gig.description.whatDoYouGet} && <p className="what-do-you-get">
                        <dl>
                            {whatYouGet.map(line => <dd>{line}</dd>)}
                        </dl>
                    </p>
                    <article className="about-seller">
                        <p className="about-title">About The Seller</p>
                        <div className="owner-card flex">
                            <img className="md-round-img" src={`${gig.owner.imgUrl}`} alt="" />
                            <div className="owner-card-right flex">
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
                <section className="reviews">

                    {gig.reviews.map(review => {
                        return <article key={review.id}>
                            <GigReview review={review} />
                        </article>
                    })}
                </section>
            </div>
            <div className="call-to-action flex">
                <div className="price-package">Special Offer</div>
                <div className="order-title-wrapper flex">
                    <span className="order-price">${gig.price}</span>
                    <p className="order-subtitle">{gig.title}</p>
                </div>
                <button className="buy-btn">Continue</button>
            </div>
        </section>
    )

}