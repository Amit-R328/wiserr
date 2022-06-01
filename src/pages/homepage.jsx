import React, { useState, useEffect, useLayoutEffect } from 'react';
import { CategoriesNavHeader } from '../cmps/headers/categories-nav-header.jsx'
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
                {/* <ScrollEvents/> */}
                <div className="homepage-app-header">

                    <div className="main-header sticky">
                        <div>
                            
                        {/* <AppHeaderHomePage /> */}
                        <span className="line-sep"></span>
                        <CategoriesNavHeader onChangeCategory={onChangeCategory} />
                        <span className="line-sep"></span>
                        </div>
                    </div>
                    <HeroCarousel />

                </div>

                <section className="trusted-by-brands max-width-container">
                    <ul className="brands-container">
                        <p>Trusted By:</p>
                        {/* <li><img className="brand-1 brand-box trusted-by" src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png' alt=''></img></li>
                        <li><img className="brand-1 brand-box trusted-by" src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png' alt=''></img></li>
                        <li><img className="brand-1 brand-box trusted-by" src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png' alt=''></img></li>
                        <li><img className="brand-1 brand-box trusted-by" src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png' alt=''></img></li>
                        <li><img className="brand-1 brand-box trusted-by" src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png' alt=''></img></li> */}

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


