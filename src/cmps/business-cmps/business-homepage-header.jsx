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
            <header className="business logged-out-homepage-header header-transparent">
                <div className="business business-header-row-wrapper">
                    <div className="business business-header-row max-width-container">
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
                                <form className="business business-search-bar-package search_bar-package">
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
                    <ul className="nav-list clean-list" >

                        <li className="business-display-from-md display-from-md clean-list">
                            <NavLink to="/business-dashboard" className="business-dashboard-nav-link nav-link" target="_blank" ><BusinessDashboard /> Dashboard</NavLink>
                        </li>

                        {/* <li className="business-display-from-md display-from-md clean-list">
                            <NavLink to="/business-solutions" className="business-dashboard-nav-link nav-link" target="_blank" ><BusinessSolutions /> Business Solutions</NavLink>
                        </li> */}

                        <li className="business-display-from-sm display-from-sm clean-list">
                            <a href="/login" rel="nofollow" className="js-open-popup-login nav-link">Sign in</a>
                        </li>

                        <li className="business-signup-btn signup-btn clean-list">
                            <a className="js-open-popup-join wiserr-header-join" rel="nofollow" href="/join">Join</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <span className="line-sep"></span>
        </div >
    )
}
