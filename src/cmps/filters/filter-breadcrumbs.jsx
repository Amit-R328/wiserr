import { VideoIcon } from '../../services/svg.service.js'
import { SortGigsList } from '../filters/sort-gigs-list.jsx'
import React, { useState } from "react";
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { BudgetFilter } from '../filters/budget-filter.jsx';
import { DeliveryDateFilter } from '../filters/delivery-date-filter.jsx'

export const FilterBreadCrumbs = () => {

    // let [searchTerm] = useState('')
    let [budgetMenu, setBudgetMenu] = useState(false)
    let [deliveryDateMenu, setDeliveryDateMenu] = useState(false)
    let { filterBy } = useSelector((storeState) => storeState.gigModule)

    // const onHandleChange = (ev, name, value) => {
    //     const field = name
    //     let { filterBy } = this.props
    //     if (field === 'labels') value = [value]
    //     filterBy = { ...filterBy, [field]: value }
    // }

    const onToggleBudget = () => {
        let flag = !budgetMenu;
        setBudgetMenu(flag);
    }

    let className = (budgetMenu) ? 'open' : ''
    let classNameDelivery = (deliveryDateMenu) ? 'open' : ''

    const onToggleDeliveryTime = () => {
        let flag = !deliveryDateMenu
        setDeliveryDateMenu(flag)
    }

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
            html: '<iframe width="560" height="315" <source src="https://res.cloudinary.com/dcbbqlssh/video/upload/v1653985384/video/wiserr_video1_ntvtry.mp4" type="video/mp4"></iframe>',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: '<i className="fa fa-thumbs-up"></i> OK',
            confirmButtonAriaLabel: 'OK',
            allowOutsideClick: true,
            allowEscapeKey: true,
        })
    }

    return (
        <main className="layout-row flex flex-column">
            <header>
                <section className="breadcrumbs-container flex">
                    <ul className="breadcrumbs">
                        {(filterBy.category) ? <li><a href="/categories"><span>Wiserr</span>{filterBy.category}</a>
                        </li> : <li><span>Wiserr</span>All</li>}
                    </ul>
                </section>

                <section className="results-category-header">
                    <div className="title-wrapper">
                        {(filterBy.txt) ? <h1>Results for "<span>{filterBy.txt}</span>"</h1> : <span></span>}
                        {(filterBy.category && !filterBy.txt) ? <h1><span>{filterBy.category}</span></h1> : <span></span>}
                        {(filterBy.category === "" && !filterBy.txt) ? <h1><span>Explore All</span></h1> : <span></span>}
                        <p>Connect with the best professionals for your project</p>
                        <button onClick={() => showSweetAlert()} className="play-video"><VideoIcon /><p>How Wiserr Works</p></button>
                    </div>
                </section>
            </header >

            <section className="filter-topbar">
                <div className={`filter-shadow-effect flex ${className}`}>
                    <div className="filters-only flex">
                        <div className="filter-floating-menu">
                            <div onClick={onToggleBudget} className={`filter-menu-title ${className} filter-menu`}>Budget
                            </div>
                            {budgetMenu && <BudgetFilter onClose={onToggleBudget} deliveryDateMenu={deliveryDateMenu} budgetMenu={budgetMenu}/>}
                        </div>
                        <div className="filter-floating-menu">
                            <div onClick={onToggleDeliveryTime} className={`filter-menu-title ${classNameDelivery} filter-menu`}>Delivery Time
                            </div>
                            {deliveryDateMenu && <DeliveryDateFilter />}
                        </div>
                    </div>
                    <div className="sort-by-container flex">
                        <span className="pre-title">Sort by
                        </span>
                            <SortGigsList />
                    </div>
                </div>
            </section>
        </main>
    )
}