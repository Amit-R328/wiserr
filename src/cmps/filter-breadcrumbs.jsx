import { height } from '@mui/material/node_modules/@mui/system'
import { ArrowDown, PathArrow, PathArrow2, VideoIcon } from '../services/svg.service.js'
import { VideoModal } from './video-modal.jsx'

export const FilterBreadCrumbs = () => {


    const onHandleVideo = () => {
        console.log('onClick')
        // {<VideoModal/>}
    }
    return (
            <div className="layout-row">
                <header>
                    <div className="breadcrumbs-container">
                        <ul className="breadcrumbs">
                            <li><a href="/"> Wiserr </a>
                                <span className="chevron-icon-right" aria-hidden="true">
                                    <PathArrow2 />
                                    {/* <PathArrow /> */}
                                </span>
                            </li>
                            <li><a href="/categories/graphics-design"> Graphics &amp; Design </a>
                                <span className="chevron-icon-right" aria-hidden="true">
                                    <PathArrow2 />
                                    {/* <PathArrow /> */}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <header className="results-category-header">
                        <div className="title-wrapper">
                            {/* <div className="flex flex-col"> */}
                            <h1>Graphics &amp; Design</h1>
                            <p>Get a beautiful website design that people love to engage with.</p>
                            <button onClick={() => onHandleVideo()}><VideoIcon /><p>How Wiserr Works</p></button>

                        </div>
                    </header>

                </header >
                
                <div className="filter-topbar">
                    <div className="filter-shadow-effect">
                        <div className="filter-floating-top-bar">
                            <div className="top-filters">
                            </div>
                        </div>
                        <div className="filter-floating-menu">
                            <div className="filter-menu-title filter-menu">Budget<span className="filter-chevron-icon-down" aria-hidden="true"><ArrowDown />
                            </span>
                            </div>
                            <div className="filter-floating-menu">
                                <div className="filter-menu-title filter-menu">Delivery Time<span className="filter-chevron-icon-down" aria-hidden="true"><ArrowDown />
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}