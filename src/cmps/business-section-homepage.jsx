import React from "react";
import { LogoBusinessFull, VCircle } from '../services/svg.service.js'

export const BusinessSectionHomepage = () => {

    return (
        <div className="fib-banner-wrapper">
            <div className="fib-banner max-width-container">
                <div className="fib-containers-grid">
                    <div className="business-text">
                        <small>
                            <i className="wiserr-business-logo"><LogoBusinessFull /></i>
                            <span className="text-upper">New</span>
                        </small>
                        <h2 className="font-domaine">
                            <span>A business solution<br></br>designed for <i>sellers</i>
                            </span>
                        </h2>
                        <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                        <ul>
                            <li><h6><VCircle /><p>Connect to consumers and experience our support</p></h6></li>
                            <li><h6><VCircle /><p>See business analysis to help mange order and<br></br>revenue</p></h6></li>
                            <li><h6><VCircle /><p>Manage gigs and boost productivity with one powerful<br></br>workspace</p></h6></li>
                        </ul>
                        <a className="co-white bg-co-green-700" target="_blank" href="/business">Explore Wiserr Business</a>
                    </div>
                    <div className="business-image">
                        <picture>
                            <source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png 2x" />
                            <source media="(min-width: 900px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624769/business-desktop-585-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624759/business-desktop-585-x2.png 2x" />
                            <source media="(min-width: 600px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_836,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114294/business-mobile-836-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_836,dpr_2.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114278/business-mobile-836-x2.png 2x" />
                            <source media="(min-width: 361px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_552,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114277/business-mobile-552-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_552,dpr_2.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114289/business-mobile-552-x2.png 2x" />
                            <source media="(max-width: 360px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_312,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114294/business-mobile-312-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_312,dpr_2.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114288/business-mobile-312-x2.png 2x" />
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" loading="lazy" alt="Wiserr Business freelancers" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

