import React, { useState, useEffect, useLayoutEffect } from 'react';
import { CategoriesNavHeader } from '../cmps/headers/categories-nav-header.jsx'
import { HeroHeaderHomePage } from '../cmps/headers/hero-header-homepage.jsx'
import { AppHeaderHomePage } from '../cmps/headers/app-header-homepage.jsx'
import { HomepageCategoriesCarouselTest } from '../cmps/homepage-categories-carousel-copy.jsx'
import { HomepageCategoriesCarousel } from '../cmps/homepage-categories-carousel.jsx'
import { SellingPropHomepage } from '../cmps/selling-prop-homepage.jsx'
import { Proposition } from '../cmps/proposition.jsx';
import { IconCategoriesHomepage } from '../cmps/icon-categories-homepage.jsx';
import { BusinessSectionHomepage } from '../cmps/business-section-homepage.jsx';
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
                {/* <ScrollEvents/> */}
                <div className="homepage-app-header">

                    <div className="main-header sticky">
                        <AppHeaderHomePage />
                        <CategoriesNavHeader onChangeCategory={onChangeCategory} />
                    </div>
                    <HeroHeaderHomePage />

                </div>
                <section className="trusted-by-brands max-width-container">
                    <ul className="brands-container">
                        <p>Trusted By:</p>
                        <li><button className="brand-1 brand-box">FACEBOOK</button></li>
                        <li><button className="brand-2 brand-box">Google</button></li>
                        <li><button className="brand-3 brand-box">NETFLIX</button></li>
                        <li><button className="brand-4 brand-box">P&G</button></li>
                        <li><button className="brand-5 brand-box">PAYPAL</button></li>
                    </ul>
                </section>
                <div className="gig-slider-container max-width-container">
                    <div className="subcategory-carousel">
                        <h2>Popular professional services</h2>
                        <HomepageCategoriesCarouselTest />
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
                <BusinessSectionHomepage/>
            </div>
        </section>
    )
}
{/* <HomepageCategoriesCarousel/> */ }


