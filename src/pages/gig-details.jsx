

import { gigService } from '../services/gig.service.js';
import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getById } from '../store/actions/gigs.actions.js';


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

    if (!gig) return <h1>Loading</h1>

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
                    {gig.description.whatDoYouGet} && <p className="what-do-you-get">{gig.description.whatDoYouGet}</p>
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