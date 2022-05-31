import { height } from '@mui/material/node_modules/@mui/system'
import { ArrowDown, PathArrow, PathArrow2, VideoIcon } from '../services/svg.service.js'
import { VideoModal } from './video-modal.jsx'
import { SortGigsList } from './sort-gigs-list.jsx'

export const FilterBreadCrumbs = () => {


    const onHandleChange = (ev,name, value) => {
console.log('ev',ev )
        const field = name
        let { filterBy } = this.props
        if (field === 'labels') value = [value]
        filterBy = { ...filterBy, [field]: value }
        console.log('filterBy',filterBy )
        // this.props.setFilter(filterBy)
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
                        {/* <button onClick={() => onHandleVideo()}><VideoIcon /><p>How Wiserr Works</p></button> */}

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

                    <div className="sort-by-wrapper">
                        <span className="pre-title sorting">Sort by</span>
                        {/* <div className="floating-menu open"> */}
                            {/* <div className="menu-title sort-filter">Best Selling<span className="chevron-icon-down" aria-hidden="true"><ArrowDown /></span>
                            </div> */}

                            {/* <div className="menu-content">
                                <div className="content-scroll"> */}
                                <SortGigsList onClick={onHandleChange}/>
                                    {/* <div className="labels-list">
                                        <label className="sort-label">Price</label>
                                        <label className="sort-label">Name</label>
                                        <label className="sort-label">Newest Arrivals</label>
                                    </div> */}
                                {/* </div> */}
                                <div className="button-row">
                                </div>
                                {/* <div> */}
                                {/* </div> */}

                            {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}