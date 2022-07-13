import React from "react"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LogoFullWhiteSellers, VCircle } from '../../services/svg.service.js'

export const SellerSectionHomepage = () => {
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)

    return (
        <div className="seller-info-container container">
            <div className="seller-container-grid">
                <div className="seller-text">
                    <div className="wiserr-seller-logo"><LogoFullWhiteSellers /><h2>sellers.</h2>
                        <span className="text-upper">New</span>
                    </div>
                    <h2 className="font-domaine">
                        <span><span>A Business Solution designed for<span><i> sellers</i></span>
                        </span></span>
                    </h2>
                    <div className="optional-img-seller-section"></div>
                    <p>Upgrade to a curated experience packed with tools and benefits, dedicated to sellers</p>
                    <ul>
                        <li><h6><VCircle /><p>Connect to consumers and experience our support</p></h6></li>
                        <li><h6><VCircle /><p>See order analysis to help manage your business and revenues</p></h6></li>
                        <li><h6><VCircle /><p>Manage gigs and boost productivity with one powerful workspace</p></h6></li>
                    </ul>
                    <div className="explore-seller-container">
                        {loggedInUser ? <NavLink to="/seller/dashboard" className="explore-seller">Explore Wiserr Seller</NavLink> : <NavLink to="/login" className="explore-seller">Explore Wiserr Seller</NavLink>}
                    </div>
                </div>
                <div className="seller-image">
                    <img src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1656858784/business-desktop-870-x1_cvrzpi.webp" loading="lazy" alt="Wiserr Business freelancers" />
                </div>
            </div>
        </div>
    )
}

