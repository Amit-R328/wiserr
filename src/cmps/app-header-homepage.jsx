import React, { useState } from 'react'
import { LogoFull, LogoFullWhite, HamburgerMenu, HamburgerMenuWhite, SearchBar } from '../services/svg.service.js'
import { CategoriesNavHeader } from './categories-nav-header.jsx'
import { HeroHeaderHomePage } from './hero-header-homepage'
import { NavLink } from 'react-router-dom'

export const AppHeaderHomePage = (props) => {

    return (
        <div className="app-header">
            <div className="main-header sticky">

                <div className="header">
                    <header className="logged-out-homepage-header">
                        <div className="header-row-wrapper">
                            <div className="header-row max-width-container equal-padding row-main">
                                <button className="btn-navicon">
                                    <HamburgerMenuWhite />
                                    {/* <HamburgerMenu /> */}
                                </button>
                                <div className="logo-main-header">
                                    <NavLink to="/" className="site-logo">
                                        <LogoFullWhite />
                                        {/* <LogoFull /> */}
                                    </NavLink>
                                </div>
                                <div className="wiserr-header-search-animated">
                                    <div className="search-bar-package-container">
                                        <form className="search-bar-package search_bar-package">
                                            <span className="search-bar-icon" aria-hidden="true">
                                                <SearchBar />
                                            </span>
                                            <input type="search" autoComplete="off" placeholder="Find services" value="" />
                                            <button className="co-white submit-button bg-co-green-700">Search</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="wiserr-nav wiserr-nav-right">
                                    <ul className="nav-list" >

                                        <li className="display-from-md">
                                            <NavLink to="/business" className="business-nav-link nav-link">Wiserr Business</NavLink>
                                        </li>

                                        <li className="display-from-md">
                                            <div className="resources-tab-package">
                                                <NavLink to="/categories" className="explore-nav-link nav-link">Explore</NavLink>
                                            </div>
                                        </li>

                                        <li className="display-from-sm">
                                            <NavLink to="/login" rel="nofollow" className="js-open-popup-login nav-link">Sign In</NavLink>
                                        </li>

                                        <li className="signup-btn">
                                            <NavLink to="/join" className="js-open-popup-join wiserr-header-join" rel="nofollow">Join</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                {/* ////scroll visible catagories menu\\\\ */}
                <CategoriesNavHeader />
            </div>
            <HeroHeaderHomePage />
        </div>
    )

}
