import { height } from '@mui/material/node_modules/@mui/system'
import { ArrowDown, PathArrow, VideoIcon } from '../services/svg.service.js'

export const FilterBreadCrumbs = () => {

    return (
        <div className="layout-row">
            <header>
                <div className="breadcrumbs-container">
                    <ul className="breadcrumbs">
                        <li><a href="/"> Wiserr </a>
                            <span className="chevron-icon-right" aria-hidden="true">
                                <PathArrow />
                            </span>
                        </li>

                        <div className="search-results-text">

                        </div>


                        <li><a href="/categories/graphics-design"> Graphics &amp; Design </a>
                            <span className="chevron-icon-right" aria-hidden="true">
                                <PathArrow />
                            </span>
                        </li>
                    </ul>

                </div>
                <header className="category-header">
                    <div className="title-wrapper">
                        <div className="flex flex-col">
                            <h1>Graphics &amp; Design</h1>
                            <p className="sc-subtitle">Get a beautiful website design that people love to engage with.</p>
                            <div className="explanation-video">
                                <button className="co-white btn-play without-border">
                                    <span className="play-icon" aria-hidden="true">
                                        <VideoIcon />
                                    </span>How Wiserr Works</button>
                            </div>
                        </div>
                    </div>
                </header>
            </header >
            <div id="topbar" className="sticky-wrapper">
                <div className="shadow-effect">
                    <div className="floating-top-bar">
                        <div className="top-filters">
                        </div>
                    </div>
                    <div className="floating-menu">
                        <div className="menu-title filter-menu">Budget<span className="chevron-icon-down" aria-hidden="true"><ArrowDown />
                        </span>
                        </div>
                        <div className="floating-menu">
                            <div className="menu-title filter-menu">Delivery Time<span className="chevron-icon-down" aria-hidden="true"><ArrowDown />
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}