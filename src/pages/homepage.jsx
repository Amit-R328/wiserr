import React from 'react'
import { HeroCarousel } from '../cmps/headers/hero-carousel.jsx'
import { CategoriesCarousel } from '../cmps/homepage-sections/categories-carousel.jsx'
import { SellingPropHomepage } from '../cmps/homepage-sections/selling-prop-homepage.jsx'
import { TestimonialsHomepage } from '../cmps/homepage-sections/testimonials-homepage.jsx'
import { IconCategoriesHomepage } from '../cmps/homepage-sections/icon-categories-homepage.jsx'
import { SellerSectionHomepage } from '../cmps/homepage-sections/seller-section-homepage.jsx'

export const HomePage = () => {
    return (
        <section>
            <HeroCarousel />
            <section className="trusted-by-brands container">
                <ul className="brands-container">
                    <p>Trusted By:</p>
                    <li className="trusted-by">FACEBOOK</li>
                    <li className="trusted-by">Google</li>
                    <li className="trusted-by">NETFLIX</li>
                    <li className="trusted-by ">P&G</li>
                    <li className="trusted-by">PAYPAL</li>
                </ul>
            </section>

            <div className="gig-slider-container container">
                <div className="subcategory-carousel">
                    <h2>Popular professional services</h2>
                    <CategoriesCarousel />
                </div>
            </div>
            <div>
                <SellingPropHomepage />
            </div>
            <div>
                <IconCategoriesHomepage />
            </div>
            <div>
                <SellerSectionHomepage />
            </div>
            <div>
                <TestimonialsHomepage />
            </div>
        </section>
    )
}


