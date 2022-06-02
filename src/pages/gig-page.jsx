import React, {  useEffect } from 'react';
import { loadGigs } from '../store/actions/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
// import { NavCategories } from '../cmps/headers/nav--categories.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { FilterBreadCrumbs } from '../cmps/filters/filter-breadcrumbs.jsx'

export const GigPage = (onChangeCategory) => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const { reviews } = useSelector((storeState) => storeState.reviewModule)
    const { gigs } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGigs(filterBy))
    }, [])

    return (
        <section className="gigs-app-container">
            <div className="main-wrapper">
                <div className="app-header">
                    <div className="main-header sticky">
                        {/* <NavCategories onChangeCategory={onChangeCategory} /> */}
                    </div>
                </div>
                <div>
                    {/* <div className="main-content-container"> */}
                        <div className="gigs-preview-main-wrapper container">
                            <div className="gigs-list-container">
                                <div className="filter-gigs-container">
                                    <FilterBreadCrumbs />
                                </div>
                                <GigList gigs={gigs} reviews={reviews} />
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
}
