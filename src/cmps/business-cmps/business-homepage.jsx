import React from 'react'
import { BusinessTools } from '../dashborad/business-dashboard.jsx'
import { CategoriesNavHeader } from '../../cmps/headers/categories-nav-header.jsx'
import { BusinessHeaderHomePage } from './business-homepage-header.jsx'
import { BusinessHeroHeaderHomePage } from './business-hero-header.jsx'
import { LogoBusinessFull } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { BusinessDashboard } from '../dashborad/business-dashboard.jsx'
import { BusinessSolutions } from './business-solutions.jsx'

export const BusinessHomepage = (props, onChangeCategory) => {

    return (
        <section>
            <div className="app-header-business">
                <div className="business-main-header business-sticky">
                    <div className="business-main-wrapper-homepage">
                        <div className="business-homepage-app-header">

                            <div className="business-main-header business-sticky">
                                <div>
                                    <BusinessHeaderHomePage />
                                    <span className="line-sep"></span>
                                    <CategoriesNavHeader onChangeCategory={onChangeCategory} />
                                    <span className="line-sep"></span>
                                </div>
                            </div>
                            <BusinessHeroHeaderHomePage />

                        </div>

                        <section className="business-trusted-by-brands business-max-width-container">
                            <ul className="business-brands-container">
                                <p>Trusted By:</p>
                                <li><button className="brand-6 business-brand-box"><p>L'<span>O</span>REAL</p></button></li>
                                <li><button className="brand-7 business-brand-box">Unilever</button></li>
                                <li><button className="brand-8 business-brand-box"><p>888.COM</p></button></li>
                                <li><button className="brand-9 business-brand-box">MyHeritage</button></li>
                            </ul>
                        </section>


                    </div>
                </div>
            </div>
        </section>

    )
}








