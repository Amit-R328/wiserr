import React, { useState, useEffect, useLayoutEffect } from 'react';
import { CategoriesNavHeader } from '../cmps/headers/categories-nav-header.jsx'
import { HeroHeaderHomePage } from '../cmps/headers/hero-header-homepage.jsx'
import { AppHeaderHomePage } from '../cmps/headers/app-header-homepage.jsx'
import {HomepageCategoriesCarousel} from '../cmps/homepage-categories-carousel.jsx'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { useSelector, useDispatch} from 'react-redux'
// import { setFilter } from "../store/actions/gigs.actions.js"

export const HomePage = (props, onChangeCategory) => {

    return (
        <section>
            <div className="main-wrapper">
                {/* <ScrollEvents/> */}
                <div className="app-header">

                    <div className="main-header sticky">
                        <AppHeaderHomePage />
                        <CategoriesNavHeader onChangeCategory={onChangeCategory} />
                    </div>

                    <HeroHeaderHomePage />
                </div>
            </div>
            {/* <HeroCarousel/> */}
            {/* <HomepageCategoriesCarouselTest/> */}
            <HomepageCategoriesCarousel/>

        </section>
    )
}
