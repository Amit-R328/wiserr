import React from "react";
import { LogoBusinessFull, VCircle } from '../../services/svg.service.js'

export const SellerSectionHomepage = () => {

    return (
        <div className="fib-banner-wrapper">
            <div className="fib-banner max-width-container">
                <div className="fib-containers-grid">
                    <div className="seller-text">
                        <small>
                            <i className="wiserr-seller-logo"><LogoBusinessFull /></i>
                            <span className="text-upper">New</span>
                        </small>
                        <h2 className="font-domaine">
                            <span><span>Solution for Sellers<br></br>designed for<span><i>sellers</i></span>
                            </span></span>
                        </h2>
                        <p>Upgrade to a curated experience packed with tools and benefits, dedicated to sellers</p>
                        <ul>
                            <li><h6><VCircle /><p>Connect to consumers and experience our support</p></h6></li>
                            <li><h6><VCircle /><p>See seller analysis to help mange order and<br></br>revenue</p></h6></li>
                            <li><h6><VCircle /><p>Manage gigs and boost productivity with one powerful<br></br>workspace</p></h6></li>
                        </ul>
                        <a className="co-white bg-co-green-700" target="_blank" href="/seller">Explore Wiserr Seller</a>
                    </div>
                    <div className="seller-image">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" loading="lazy" alt="Wiserr Business freelancers" />
                    </div>
                </div>
            </div>
        </div>
    )
}

