import React from "react";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

export const GigPreview = ({ gig, reviews }) => {
    const price = gig.price.toLocaleString('en-US', {style: 'currency',currency: 'USD'})
    return (

        <li className="gig-preview">
            <article className="gig-card">
                <Link to={`/categories/${gig._id}`}>
                    <div className="gig-img-container">
                        <img className="gig-img" src={`${gig.imgUrl[0]}`} alt='gig' />
                    </div>

                    <section>
                        <div className="seller-info">
                            <div className="inner-wrapper">
                                <div className="owner-avatar">
                                    <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="owner" />
                                    <div className="owner-name">{gig.owner.fullName}</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="gig-title">
                        <p>{gig.title.substr(0, 75)}...</p>
                    </div>
                    <div className="gig-rate">
                        <StarIcon />
                        <div className="avg-rate">4.9</div>
                        {/* <span className="num-of-rate">(113)</span> */}
                    </div>
                </Link>
                <section className="card-fav-price">
                    <div className="heart-btn"><button className="fav-btn">❤</button></div>
                    <div className="gig-price">
                        <h4 className="gig-price"><div className="price-text">STARTING AT</div>{price}</h4>
                        </div>
                </section >
            </article>
        </li >
    )
}