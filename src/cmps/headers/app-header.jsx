import React, { useState } from 'react'
import { LogoFull, HamburgerMenu, SearchBar } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { Search } from '../search.jsx'

export const AppHeader = (props) => {

    return (
        <div className="header">
                <div className="header-row-wrapper">
                    <div className="header-row max-width-container equal-padding row-main">
                        <button className="btn-navicon">
                            <HamburgerMenu />
                        </button>
                        <div className="logo-main-header">
                            <NavLink to="/" className="site-logo">
                                <LogoFull />
                                {/* <LogoFullWhite /> */}
                            </NavLink>
                        </div>
                        <div className="wiserr-header-search-animated">
                            <div className="search-bar-package-container">
                                <form className="search-bar-package search_bar-package">
                                    <span className="search-bar-icon" aria-hidden="true">
                                        <SearchBar />
                                    </span>
                                    <Search/>
                                    {/* <input type="search" autoComplete="off" placeholder="Find services" value="" />
                                    <button className="co-white submit-button bg-co-green-700">Search</button> */}
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
                                    <NavLink to="/login" rel="nofollow" className="js-open-popup-login nav-link">Login/Join</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
