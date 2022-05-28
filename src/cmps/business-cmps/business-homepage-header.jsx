import React, { useState } from 'react'
import { LogoBusinessFull, HamburgerMenu, HamburgerMenuWhite, SearchBar } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { Search } from '../search.jsx'
import { BusinessDashboard } from './business-dashboard.jsx'

export const BusinessHeaderHomePage = (props) => {
    const [searchBar, setSearchBar] = useState('hidden')
    const [navHeader, setNavHeader] = useState('hidden')
    const [logo, setLogo] = useState('logo-white')
    const [headerTextColor, setHeaderTextColor] = useState('white')

    return (
        <div className="header-business">
            <header className="business business-logged-out-homepage-header business-header-transparent">
                <div className="business business-header-row-wrapper">
                    <div className="business business-header-row">
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
                            <NavLink to="/business/dashboard" className="business-dashboard-nav-link business-nav-link" target="_blank" ><BusinessDashboard /> Dashboard</NavLink>
                        </li>

                        {/* <li className="business-display-from-md business-display-from-md">
                            <NavLink to="/business-solutions" className="business-dashboard-nav-link business-nav-link" target="_blank" ><BusinessSolutions /> Business Solutions</NavLink>
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
