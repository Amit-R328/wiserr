import React from 'react'
import { HeroCarousel } from '../cmps/headers/hero-carousel.jsx'
import { CategoriesCarousel } from '../cmps/homepage-sections/categories-carousel.jsx'
import { SellingPoint } from '../cmps/homepage-sections/selling-point.jsx'
import { Testimonials } from '../cmps/homepage-sections/testimonials.jsx'
import { IconCategories } from '../cmps/homepage-sections/icon-categories.jsx'
import { SellerSectionHomepage } from '../cmps/homepage-sections/seller-section.jsx'
import { TrustedBy } from '../cmps/homepage-sections/trusted-by.jsx'
import { CategoriesSliderMobile } from '../cmps/homepage-sections/categories-slider-mobile.jsx'
import { useWindowDimensions } from '../hooks/useWindowDimensions.jsx'

export const HomePage = () => {
    const { width } = useWindowDimensions()
    return (
        <section>
            <section className="middle-section">
            <div className="hero">
                <HeroCarousel />
            </div>
            {width > 600 &&
            <div className="trusted-by-brands container flex">
                <TrustedBy />
            </div>
            }
                <div className="gig-slider-container container">
                    <h2 className="professional-services">Popular professional services</h2>
                    {/* {(width <= 650) ? <CategoriesSliderMobile /> : <CategoriesCarousel />} */}
                    <CategoriesSliderMobile /> 
                </div>
                <SellingPoint />
                <div className="icon-categories-container container flex flex-column">
                    <IconCategories />
                </div>
                <SellerSectionHomepage />
                <Testimonials />
            </section>
        </section>
    )
}


