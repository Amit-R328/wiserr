import { height } from '@mui/material/node_modules/@mui/system'
import { ArrowDown, PathArrow, PathArrow2, VideoIcon } from '../services/svg.service.js'
import { SortGigsList } from './sort-gigs-list.jsx'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'


export const FilterBreadCrumbs = () => {
    let [searchTerm] = useState('')
    let { filterBy } = useSelector((storeState) => storeState.gigModule)


    const onHandleChange = (ev,name, value) => {
console.log('ev',ev )
        const field = name
        let { filterBy } = this.props
        if (field === 'labels') value = [value]
        filterBy = { ...filterBy, [field]: value }
        console.log('filterBy',filterBy )        
        // this.props.setFilter(filterBy)
    }
    // const getCategoryTagLine = () => {
    //     // let filterBy.category
    //     switch (filterBy.category) {
    //         case filterBy.category === 'Graphics & Design':
    //             return 'Get a beautiful website design that people love to engage with.'
    //         case filterBy.category === 'Digital Marketing':
    //             return 'Connect with specialists for marketing guidance and professional relationships.'
    //     }eo
    // }

    const showSweetAlert = (ev) => {
        // ev.preventDefault()
        Swal.fire({
            className: "video-modal",
            width: 1000,
            padding: '3em',
            color: '#222',
            background: '#fff',
            backdrop: 'rgba(0,0,0,0.4)',
            title: 'How Wiserr Works',
            // html: '<iframe width="560" height="315" <source src="https://res.cloudinary.com/dcbbqlssh/video/upload/v1653985384/video/wiserr_video1_ntvtry.mp4" type="video/mp4"></iframe>',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
            confirmButtonAriaLabel: 'OK',
            allowOutsideClick: true,
            allowEscapeKey: true,
            // grow: 'fullscreen'
        })
        ev.preventDefault();
        ev.stopPropagation()
    }

    return (
    <div className="layout-row">
    <header>
        <div className="breadcrumbs-container">
            <ul className="breadcrumbs">
                {(filterBy.category) ? <li><a href="/">Wiserr </a><span className="chevron-icon-right" aria-hidden="true"><PathArrow2 /></span></li> : <span></span>}

                {(filterBy.category) ? <li><a href="/categories">{filterBy.category}</a>
                    <span className="chevron-icon-right">
                        <PathArrow2 />
                    </span></li> : <li><span></span></li>}
            </ul>
        </div>

        <header className="results-category-header">
            <div className="title-wrapper">
                {(filterBy.txt) ? <h1>Results for "<span>{filterBy.txt}</span>"</h1> : <span></span>}
                {(filterBy.category && !filterBy.txt) ? <h1><span>{filterBy.category}</span></h1> : <span></span>}
                {(filterBy.category === "" && !filterBy.txt) ? <h1><span>Explore All</span></h1> : <span></span>}
                <p>Connect with the best professionals for your project</p>
                <button onClick={() => showSweetAlert()} className="play-video"><VideoIcon /><p>How Wiserr Works</p></button>
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