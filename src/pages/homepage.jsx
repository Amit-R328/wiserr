import React from 'react'
import { HeroCarousel } from '../cmps/headers/hero-carousel.jsx'
import { CategoriesCarousel } from '../cmps/homepage-sections/categories-carousel.jsx'
import { SellingPoint } from '../cmps/homepage-sections/selling-point.jsx'
import { Testimonials } from '../cmps/homepage-sections/testimonials.jsx'
import { IconCategories } from '../cmps/homepage-sections/icon-categories.jsx'
import { SellerSectionHomepage } from '../cmps/homepage-sections/seller-section.jsx'

export const HomePage = () => {
    return (
        <section>
            <HeroCarousel />
            <section className="trusted-by-brands">
                <ul className="brands-container container">
                    <p>Trusted By:</p>
                    <li className="trusted-by">FACEBOOK</li>
                    <li className="trusted-by">Google</li>
                    <li className="trusted-by">NETFLIX</li>
                    <li className="trusted-by ">P&G</li>
                    <li className="trusted-by">PAYPAL</li>
                </ul>
            </section>

            <div className="gig-slider-container container">
                    <h2>Popular professional services</h2>
                    <CategoriesCarousel />
            </div>
                <SellingPoint />
                <div className="container">
                <IconCategories />
                </div>
                
                <SellerSectionHomepage />
                
                <Testimonials />
        </section>
    )
}


