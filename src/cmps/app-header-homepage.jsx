import React, { useState } from 'react'
import { LogoFull, LogoFullWhite, HamburgerMenu, SearchBar } from '../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import {HeroCarousel} from './hero-carousel.jsx'

export const AppHeaderHomePage = (props) => {

    return (
        <div className="app-header">
            <div className="main-header sticky">

                <div className="header">
                    <header className="logged-out-homepage-header">
                        <div className="header-row-wrapper">
                            <div className="header-row max-width-container equal-padding row-main">
                                <button className="btn-navicon">
                                    <HamburgerMenu />
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
                                                <SearchBar/>
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
                <div id="categories-menu" className="categories-menu-scroll ">
                    <div className="categories-menu-wrapper ">
                        <div className="categories-menu-package default has-overflow max-width-container equal-padding">
                            <ul className="categories">
                                <li className="sub-menu-item target top-level buckets_without_title buckets-without-title">
                                    <NavLink to="/categories" className="graphic-design">Graphics &amp; Design</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default list">
                                    <NavLink to="/categories" className="online-marketing">Digital Marketing</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default list">
                                    <NavLink to="/categories" className="writing-translation">Writing &amp; Translation</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default list">
                                    <NavLink to="/categories" className="video-animation">Video &amp; Animation</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default list">
                                    <NavLink to="/categories" className="music-audio">Music &amp; Audio</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default list">
                                    <NavLink to="/categories" className="programming-tech">Programming &amp; Tech</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default list">
                                    <NavLink to="/categories" className="business">Business</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default list">
                                    <NavLink to="/categories" className="lifestyle">Lifestyle</NavLink>
                                </li>

                                <li className="sub-menu-item target top-level default static list">
                                    <NavLink to="/categories" className="trending">Trending</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hero-wrapper hero-andrea">
                <div className="hero-backgrounds"><HeroCarousel/>
                    <div className="hero-andrea">
                        <div className="seller-name max-width-container"><p>Andrea, <b>Fashion Designer</b>
                        </p>
                        </div>
                    </div>
                    <div className="hero-moon">
                        <div className="seller-name max-width-container show-stars"><p>Moon, <b>Marketing Expert</b>
                        </p>
                        </div>
                    </div>
                    <div className="hero-ritika">
                        <div className="seller-name max-width-container"><p>Ritika, <b>Shoemaker and Designer</b>
                        </p>
                        </div>
                    </div>
                    <div className="hero-zach" >
                        <div className="seller-name max-width-container">
                            <p>Zach, <b>Bar Owner</b>
                            </p>
                        </div>
                    </div>
                    <div className="hero-gabrielle">
                        <div className="seller-name max-width-container show-stars">
                            <p>Gabrielle, <b>Video Editor</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero max-width-container">
                    <div className="header">
                        <h1 className="font-domaine">
                            <span className="">Find the perfect <i>freelance</i> services for your business</span>
                        </h1>
                        <div className="search-bar-package search_bar-package">
                            <form className="">
                                <span className="lFICM06 search-bar-icon" aria-hidden="true" >
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z">

                                        </path>
                                    </svg>
                                </span>
                                {/* <input type="search" autoComplete="off" placeholder="Try &quot;building mobile app&quot;" value="" className=""><button className="ORLWF8p _0MkXbqi co-white submit-button bg-co-green-700">Search</button></input> */}
                            </form>
                        </div>
                        <div className="popular">Popular:
                            <ul className="">
                                <li>
                                    <a href="/categories/graphics-design/web-plus-mobile-design?source=hplo_search_tag&amp;pos=1&amp;name=web-plus-mobile-design" className="text-body-2">Website Design</a>
                                </li>
                                <li>
                                    <a href="/categories/programming-tech" className="text-body-2">WordPress</a>
                                </li>
                                <li>
                                    <a href="/categories/graphics-design" className="text-body-2">Logo Design</a>
                                </li>
                                <li>
                                    <a href="/search/gigs" className="text-body-2">NFT Art</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

