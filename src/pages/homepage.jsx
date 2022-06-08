import React from 'react'
import { HeroCarousel } from '../cmps/headers/hero-carousel.jsx'
import { CategoriesCarousel } from '../cmps/homepage-sections/categories-carousel.jsx'
import { SellingPoint } from '../cmps/homepage-sections/selling-point.jsx'
import { Testimonials } from '../cmps/homepage-sections/testimonials.jsx'
import { IconCategories } from '../cmps/homepage-sections/icon-categories.jsx'
import { SellerSectionHomepage } from '../cmps/homepage-sections/seller-section.jsx'
import { TrustedBy } from '../cmps/homepage-sections/trusted-by.jsx'

export const HomePage = () => {
    return (
        <section>
            <div className="hero">
                <HeroCarousel />
            </div>
            <div className="trusted-by-brands container flex">
                <TrustedBy />
            </div>
            <div className="gig-slider-container container">
                <h2 className='professional-services'>Popular professional services</h2>
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


