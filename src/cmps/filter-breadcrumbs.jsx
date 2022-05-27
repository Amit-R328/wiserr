import { ArrowDown, PathArrow, VideoIcon } from '../services/svg.service.js'

export const FilterBreadCrumbs = () => {

    return (
        <div className="layout-row">
            <header>
                <ul className="breadcrumbs">
                    <li><a href="/"> Wiserr </a>
                        <span className="chevron-icon-right" aria-hidden="true">
                            <PathArrow />
                        </span>
                    </li>
                    <li><a href="/categories/graphics-design"> Graphics &amp; Design </a>
                        <span className="chevron-icon-right" aria-hidden="true">
                            <PathArrow />
                        </span>
                    </li>
                </ul>
                <header className="category-header">
                    <div className="title-wrapper">
                        <div className="flex flex-col">
                            <h1>Graphics &amp; Design</h1>
                            <div className="explanation-video">
                                <p className="sc-subtitle">Get a beautiful website design that people love to engage with.</p>
                                <button className="co-white btn-play without-border">
                                    <span className="play-icon" aria-hidden="true">
                                        <VideoIcon />
                                    </span>How Wiserr Works</button>
                            </div>
                        </div>
                    </div>
                </header>
            </header>
        </div>



        //    <div className="">
        //         <div className="menu-title filter-menu">Budget<span className="chevron-icon-down" aria-hidden="true">
        //             <ArrowDown />
        //         </span>
        //         </div>
        //     </div>
    )
}