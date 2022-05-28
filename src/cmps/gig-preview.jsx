import React from "react";
import { Link } from "react-router-dom";



export const GigPreview = ({ gig }) => {
    return (

        <li className="gig-preview">
            <article className="gig-card">
                <Link to={`/categories/${gig._id}`}>
                    <div className="gig-img-container">
                        <img className="gig-img" src={`${gig.imgUrl[0]}`} alt='gig' />
                    </div>

                    <section>
                        <div class="seller-info seller-text-body-2">
                            <div class="inner-wrapper">
                                <div className="owner-avatar">
                                    <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="owner" />
                                </div>
                                <section className="owner-details">
                                    <p className="owner-name">{gig.owner.fullName}</p>
                                </section>
                                <p>{gig.title.substr(0, 75)}...</p>
                                
                            </div>
                        </div>
                    </section>

                </Link>
                <section className="card-fav-price">
                    <button className="fav-btn">❤</button>
                    <h4 className="gig-price"><span>STARTING AT </span>${gig.price}</h4>
                </section >
            </article>
        </li >
    )
}