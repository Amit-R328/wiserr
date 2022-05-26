import React from 'react'
import { LogoBusinessFull } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { BusinessTools } from './business-tools.jsx'
import { BusinessSolutions } from './business-solutions.jsx'

export const BusinessHomepage = (props) => {

    return (
        <div className="app-header business">
            Hello from business-homepage
            <div className="main-header business sticky">
                <div className="header business">
                    <header className="business logged-out-homepage-header header-transparent">
                        <div className="business header-row-wrapper">
                            <div className="business header-row max-width-container equal-padding row-main">
                                <a href="/" className="business site-logo clean-list">
                                    <LogoBusinessFull />
                                </a>
                            </div>
                        </div>

                        <nav className="business business-wiserr-nav wiserr-nav-right">
                            <ul className="nav-list clean-list" >

                                <li className="business-display-from-md display-from-md clean-list">
                                    <NavLink to="/business-tools" className="business-tools-nav-link nav-link" target="_blank" ><BusinessTools /> Business Tools</NavLink>
                                </li>

                                <li className="business-display-from-md display-from-md clean-list">
                                    <NavLink to="/business-solutions" className="business-tools-nav-link nav-link" target="_blank" ><BusinessSolutions /> Business Solutions</NavLink>
                                </li>

                                <li className="business-display-from-sm display-from-sm clean-list">
                                    <a href="/login" rel="nofollow" className="js-open-popup-login nav-link">Sign in</a>
                                </li>

                                <li className="business-signup-btn signup-btn clean-list">
                                    <a className="js-open-popup-join wiserr-header-join" rel="nofollow" href="/join">Join</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div >

                {/* ////scroll visible catagories menu\\\\ */}
                <div div id="categories-menu" className="categories-menu-scroll" >
                    <div className="categories-menu-wrapper categories_menu-package">
                        <nav className="categories-menu-package default has-overflow">
                            <ul className="categories clean-list">
                                <li className="sub-menu-item target top-level buckets_without_title buckets-without-title clean-list">
                                    <a href="/categories/graphics-design" className="">Graphics &amp; Design</a>
                                </li>

                                <li className="sub-menu-item target top-level default list clean-list">
                                    <a href="/categories/online-marketing">Digital Marketing</a>
                                </li>

                                <li className="sub-menu-item target top-level default list clean-list">
                                    <a href="/categories/writing-translation" className="">Writing &amp; Translation</a>
                                </li>

                                <li className="sub-menu-item target top-level default list clean-list">
                                    <a href="/categories/video-animation" className="">Video &amp; Animation</a>
                                </li>

                                <li className="sub-menu-item target top-level default list clean-list">
                                    <a href="/categories/music-audio">Music &amp; Audio</a>
                                </li>

                                <li className="sub-menu-item target top-level default list clean-list">
                                    <a href="/categories/programming-tech">Programming &amp; Tech</a>
                                </li>

                                <li className="sub-menu-item target top-level default list clean-list">
                                    <a href="/categories/business">Business</a>
                                </li>

                                <li className="sub-menu-item target top-level default list clean-list">
                                    <a href="/categories/lifestyle">Lifestyle</a>
                                </li>

                                <li className="sub-menu-item target top-level default static list clean-list">
                                    <p className="">Trending</p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div >
            </div >

            <div className="business-hero-wrapper hero-wrapper m-b-0 hero-andrea">
                <div className="business-hero-backgrounds hero-backgrounds">
                    <div className="business-hero-gabriela">
                        <div className="business-seller-name seller-name max-width-container">
                            <div className="seller-details-preview">
                                <div className="seller-details-header">
                                    {/* <AccountCircleIcon /> */}
                                    <p className="seller-first-name-header"><b>Gabrielle</b></p>
                                    <p className="seller-category-header">Video Editor</p>
                                    {/* <div className="seller-rating-header" {user.rate}></div> */}
                                    <p className="seller-services">Services:</p>
                                    <button className="category-link-btn-tag">Video Production</button>
                                    <button className="category-link-btn-tag">Transcription</button>
                                    <button className="category-link-btn-tag">Copy Editing</button>
                                    <button className="category-link-btn-tag">Video Editing</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="business-hero max-width-container">
                    <div className="business-header">
                        <h1 className="business-font-domaine">
                            <div className="expertise">Expertise<span>,</span><p>When<br>you need it</br></p></div>
                        </h1>

                        <div className="business-search-bar-package search_bar-package">
                            <form className="">
                                <span className="search-bar-icon" aria-hidden="true" >
                                    <svg width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z">
                                        </path>
                                    </svg>
                                </span>
                                <input type="search" autoComplete="off" placeholder="Try &quot;building mobile app&quot;" value="" className=""><button className="co-white submit-button bg-co-green-700">Search</button></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

