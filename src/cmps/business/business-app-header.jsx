import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search } from '../search.jsx'
import { LogoBusinessFull, HamburgerMenu, HamburgerMenuWhite, SearchBar } from '../../services/svg.service.js'
import { BusinessHomepage } from './business-homepage.jsx'

export const BusinessAppHeader = (props) => {

    return (
        <div className="header-business">
            <header className="business business-logged-out-homepage-header business-header-transparent">
                <div className="business-header-row-wrapper">
                    <div className="business-header-row">
                        <button className="btn-navicon">
                            <HamburgerMenuWhite />
                            {/* <HamburgerMenu /> */}
                        </button>
                        <div className="business-logo-main-header">
                            <NavLink to="/" className="site-logo">
                                <LogoBusinessFull />
                            </NavLink>
                        </div>

                        <div className="business business-wiserr-header-search-animated">
                            <div className="business business-search-bar-package-container">
                                <form className="business business-search-bar-package business-search_bar-package">
                                    <span className="business business-search-bar-icon" aria-hidden="true">
                                        <SearchBar />
                                    </span>
                                    {/* <input type="search" autoComplete="off" placeholder="Find services" value="" />
                                    <button className="co-white business-submit-button bg-co-green-700">Search</button> */}
                                    <Search />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="business business-wiserr-nav business-wiserr-nav-right">
                    <ul className="business-nav-list" >

                        <li className="business-display-from-md business-display-from-md">
                            <NavLink to="/business" className="business-homepage-nav-link business-nav-link" target="_blank" ><BusinessHomepage /> Wiserr Business</NavLink>
                        </li>

                        {/* <li className="business-display-from-md display-from-md clean-list">
                            <NavLink to="/business-solutions" className="business-dashboard-nav-link nav-link" target="_blank" ><BusinessSolutions /> Business Solutions</NavLink>
                        </li> */}

                        <li className="business-display-from-sm business-display-from-sm">
                            <a href="/login" rel="nofollow" className="business-js-open-popup-login business-nav-link">Sign in</a>
                        </li>

                        <li className="business-signup-btn business-signup-btn">
                            <a className="business-js-open-popup-join business-wiserr-header-join" rel="nofollow" href="/join">Join</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <span className="line-sep"></span>
        </div >
    )
}
