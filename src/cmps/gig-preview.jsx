import React from "react";
import { Link } from "react-router-dom";


export const GigPreview = ({ gig }) => {
    return (
        
            <li className="gig-preview">
                <article className="gig-card flex">
                    <Link to={`/categories/${gig._id}`}>
                        <img className="gig-img" src={`${gig.imgUrl[0]}`} alt='gig' />
                        <section className="owner-avatar flex">
                            <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="owner" />
                        </section>
                        <section className="owner-details flex">
                            <p className="owner-name">{gig.owner.fullName}</p>
                        </section>
                        <p>{gig.title.substr(0, 75)}...</p>
                    </Link>
                    <section className="flex card-fav-price">
                        <button className="fav-btn flex">❤</button>
                        <h4 className="gig-price"><span>STARTING AT </span>${gig.price}</h4>
                    </section>
                </article>
            </li>
        

    )
}