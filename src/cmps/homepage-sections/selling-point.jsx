import React from "react"
import { VCircle } from '../../services/svg.service.js'

export const SellingPoint = () => {
    return (
        <div className="selling-proposition-wrapper container">
            <div className="selling-proposition">
                <div className="selling-text">
                    <h2>A whole world of freelance<br></br>talent at your fingertips</h2>
                    <ul className="ul-selling-points">
                        <li><h6><VCircle /><strong>The best for every budget</strong></h6>
                            <p>Find high-quality services at every price point.<br></br> No hourly rates, just project-based pricing.</p>
                        </li>

                        <li><h6><VCircle /><strong>Quality work done quickly</strong></h6>
                            <p>Find the right freelancer to begin working on your project within minutes.</p>
                        </li>

                        <li><h6><VCircle /><strong>Protected payments, every time</strong></h6>
                            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                        </li>
                        <li><h6><VCircle /><strong>24/7 support</strong></h6>
                            <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                        </li>
                    </ul>
                </div>
                <div className="selling-img">
                    <img srcSet="https://res.cloudinary.com/dcbbqlssh/image/upload/v1656858355/selling-proposition-still-1400-x1_vtle7v.webp" alt="" />
                </div>
            </div>
        </div >
    )
}


