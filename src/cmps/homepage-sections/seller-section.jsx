import React from "react";
import { NavLink } from 'react-router-dom'

import { LogoFullWhite, VCircle } from '../../services/svg.service.js'

export const SellerSectionHomepage = () => {

    return (
        <div className="seller-info-container container">
            <div className="seller-container-grid">
                <div className="seller-text">
                    <div className="wiserr-seller-logo"><LogoFullWhite />
                        <span className="text-upper">New</span>
                    </div>

                    <h2 className="font-domaine">
                        <span><span>Solution for Sellers<br></br>designed for<span><i>sellers</i></span>
                        </span></span>
                    </h2>
                    <p>Upgrade to a curated experience packed with tools and benefits, dedicated to sellers</p>
                    <ul>
                        <li><h6><VCircle /><p>Connect to consumers and experience our support</p></h6></li>
                        <li><h6><VCircle /><p>See order analysis to help manage your business and revenues</p></h6></li>
                        <li><h6><VCircle /><p>Manage gigs and boost productivity with one powerful workspace</p></h6></li>
                    </ul>
                    <div className="explore-seller-container">
                        <NavLink to="/seller/dashboard" className="explore-seller">Explore Wiserr Seller</NavLink>
                    </div>
                </div>
                <div className="seller-image">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" loading="lazy" alt="Wiserr Business freelancers" />
                </div>
            </div>
        </div>
    )
}

