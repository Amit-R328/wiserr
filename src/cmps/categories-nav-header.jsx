import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const CategoriesNavHeader = (props) => {

    return (
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

    )
}

