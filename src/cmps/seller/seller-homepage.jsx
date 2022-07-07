import React from 'react'
import {SellerHero} from './seller-hero.jsx'
import {CategoriesCarousel} from '../homepage-sections/categories-carousel.jsx'
import {LorealLogo, UnileverLogo, EightLogo, MyHeritageLogo} from '../../services/svg.service.js'

export const SellerHomepage = () => {
    return (
        <section>
            <div className="app-header-seller">
                <SellerHero/>
            </div>

            <section className="seller-trusted-by-brands container flex">
                <ul className="seller-brands-container flex">
                    <li>Trusted By:</li>
                    <li><LorealLogo/></li>
                    <li><UnileverLogo/></li>
                    <li><EightLogo/></li>
                    <li><MyHeritageLogo/></li>
                </ul>
            </section>

            <div className="gig-slider-container container">
                <h2 className="professional-services">Popular services for businesses</h2>
                <CategoriesCarousel />
            </div>
        </section>

    )
}








