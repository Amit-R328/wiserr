import React, { useEffect } from 'react';
import { loadGigs } from '../store/actions/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { FilterBreadCrumbs } from '../cmps/filters/filter-breadcrumbs.jsx'
import { Loader } from '../cmps/loader.jsx';

export const GigPage = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const { reviews } = useSelector((storeState) => storeState.reviewModule)
    const { gigs } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGigs(filterBy))
    }, [])

    return (
        <section className="gigs-app-container">
            <div>
                <div className="gigs-preview-main-wrapper container">
                    <div className="gigs-list-container flex flex-column">
                        <div className="filter-gigs-container">
                            <FilterBreadCrumbs />
                        </div>
                        {!gigs.length && <Loader/>}
                        <GigList gigs={gigs} reviews={reviews} />
                    </div>
                </div>
            </div>
        </section>
    )
}
