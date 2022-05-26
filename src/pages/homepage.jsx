import React from "react"
import { CategoriesNavHeader } from '../cmps/categories-nav-header.jsx'
import { HeroHeaderHomePage } from '../cmps/hero-header-homepage.jsx'
import { AppHeaderHomePage } from '../cmps/app-header-homepage.jsx'
import { AppFooter } from '../cmps/app-footer.jsx'

export const HomePage = () => {

    return (
        <section>
            <div className="main-wrapper">
                <div className="app-header">
                    <div className="main-header sticky">
                        <AppHeaderHomePage />
                        <CategoriesNavHeader />
                    </div>
                    <HeroHeaderHomePage />
                </div>
                <div className="footer-container">
                    <AppFooter />
                </div>
            </div>


            {/* <HeroCarousel/> */}

        </section>
    )
}