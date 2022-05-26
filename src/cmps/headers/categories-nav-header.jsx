import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector} from 'react-redux'

export const CategoriesNavHeader = (props) => {
    const {filterBy} = useSelector((storeState) => storeState.gigModule)

    return (
        <div id="categories-menu" className="categories-menu-scroll ">
            <div className="categories-menu-wrapper ">
                <div className="categories-menu-package default has-overflow max-width-container equal-padding">
                    <ul className="categories">
                        <li className="sub-menu-item target top-level buckets_without_title buckets-without-title">
                            <button onClick={()=> props.onChangeCategory('Graphics & Design')} className="graphic-design">Graphics &amp; Design</button>
                        </li>

                        <li className="sub-menu-item target top-level default list">
                            <button onClick={()=> props.onChangeCategory('Digital Marketing')} className="online-marketing">Digital Marketing</button>
                        </li>

                        <li className="sub-menu-item target top-level default list">
                            <button onClick={()=> props.onChangeCategory('Writing & Translation')} className="writing-translation">Writing &amp; Translation</button>
                        </li>

                        <li className="sub-menu-item target top-level default list">
                            <button onClick={()=> props.onChangeCategory('Video & Animation')} className="video-animation">Video &amp; Animation</button>
                        </li>

                        <li className="sub-menu-item target top-level default list">
                            <button onClick={()=> props.onChangeCategory('Music & Audio')} className="music-audio">Music &amp; Audio</button>
                        </li>

                        <li className="sub-menu-item target top-level default list">
                            <button onClick={()=> props.onChangeCategory('Programming & Tech')} className="programming-tech">Programming &amp; Tech</button>
                        </li>

                        <li className="sub-menu-item target top-level default list">
                            <button onClick={()=> props.onChangeCategory('Business')} className="business">Business</button>
                        </li>

                        <li className="sub-menu-item target top-level default list">
                            <button onClick={()=> props.onChangeCategory('Lifestyle')} className="lifestyle">Lifestyle</button>
                        </li>

                        <li className="sub-menu-item target top-level default static list">
                            <button onClick={()=> props.onChangeCategory('')} className="trending">All</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

