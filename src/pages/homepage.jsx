import React, { useState, useEffect, useLayoutEffect } from 'react';
import { NavCategories } from '../cmps/headers/nav--categories.jsx'
import { HeroCarousel } from '../cmps/headers/hero-carousel.jsx'
import { AppHeaderHomePage } from '../cmps/headers/app-header-homepage.jsx'
import { CategoriesCarousel } from '../cmps/homepage-sections/categories-carousel.jsx'
// import { HomepageCategoriesCarousel } from '../cmps/homepage-sections/homepage-categories-carousel.jsx'
import { SellingPropHomepage } from '../cmps/homepage-sections/selling-prop-homepage.jsx'
import { TestimonialsHomepage } from '../cmps/homepage-sections/testimonials-homepage.jsx'
import { IconCategoriesHomepage } from '../cmps/homepage-sections/icon-categories-homepage.jsx';
import { SellerSectionHomepage } from '../cmps/homepage-sections/seller-section-homepage.jsx';
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { useSelector, useDispatch} from 'react-redux'
// import { setFilter } from "../store/actions/gigs.actions.js"
// import { trustedFB }
// import { trustedFB }
// import { trustedFB }

export const HomePage = (props, onChangeCategory) => {
    return (
        <section>
            <div className="main-wrapper-homepage">
                <div className="homepage-app-header">
                        <div>
                        <span className="line-sep"></span>
                        <NavCategories onChangeCategory={onChangeCategory} />
                        <span className="line-sep"></span>
                        </div>
                    </div>
                    <HeroCarousel />

                <section className="trusted-by-brands max-width-container">
                    <ul className="brands-container">
                        <p>Trusted By:</p>
                        <li><button className="brand-1 brand-box trusted-by">FACEBOOK</button></li>
                        <li><button className="brand-2 brand-box trusted-by">Google</button></li>
                        <li><button className="brand-3 brand-box trusted-by">NETFLIX</button></li>
                        <li><button className="brand-4 brand-box trusted-by ">P&G</button></li>
                        <li><button className="brand-5 brand-box trusted-by">PAYPAL</button></li>
                    </ul>
                </section>
                <div className="gig-slider-container max-width-container">
                    <div className="subcategory-carousel">
                        <h2>Popular professional services</h2>
                        <CategoriesCarousel />
                    </div>
                </div>
            </div>
            <div>
                <SellingPropHomepage />
            </div>
            <div>
                <IconCategoriesHomepage/>
            </div>
            <div>
                <SellerSectionHomepage/>
            </div>
            <div>
                <TestimonialsHomepage/>
            </div>
        </section>
    )
}


