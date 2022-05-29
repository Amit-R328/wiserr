import React, { useState } from 'react'
import { LogoFull, LogoFullWhite, HamburgerMenu, HamburgerMenuWhite, SearchBar } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { Search } from '../search.jsx'

export const AppHeader = (props) => {
    const [searchBar, setSearchBar] = useState('hidden')
    const [navHeader, setNavHeader] = useState('hidden')
    const [logo, setLogo] = useState('logo-white')
    const [headerTextColor, setHeaderTextColor] = useState('white')


    return (
        <div className="header">
            <header className="logged-out-header">
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
                    <div className="nav-wiserr-header-search-animated">
                        <div className="search-bar-package-container">
                            <form className="search-bar-package search_bar-package">
                                <span className="search-bar-icon searching-icon" aria-hidden="true">
                                    <SearchBar />
                                </span>
                                <Search />
                                {/* <input type="search" autoComplete="off" placeholder="Find services" value="" />
                                    <button className="co-white submit-button bg-co-green-700">Search</button> */}
                                </form>
                            </div>
                        </div>
                        <div className="wiserr-nav-right-container-helper">
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
            </header >
        </div>
    )
}
