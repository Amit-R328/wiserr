import React from "react"
import { CategoriesNavHeader } from '../cmps/categories-nav-header.jsx'
import { HeroHeaderHomePage } from '../cmps/hero-header-homepage.jsx'
import { AppHeaderHomePage } from '../cmps/app-header-homepage.jsx'

export const HomePage = () => {

    return (
        <section>
            <div className="app-header">
            <div className="main-header sticky">
            <AppHeaderHomePage/>
            <CategoriesNavHeader />
            </div>
            <HeroHeaderHomePage />
        </div>


            {/* <HeroCarousel/> */}

        </section>
    )
}