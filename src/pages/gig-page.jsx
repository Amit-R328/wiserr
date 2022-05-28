import React, { useState, useEffect } from 'react';
import { loadGigs } from '../store/actions/gigs.actions.js'
import { GigList } from '../cmps/gig-list.jsx'

import { AppHeader } from '../cmps/headers/app-header.jsx'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


export const GigPage = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const { gigs } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset);

    useEffect(() => {
        dispatch(loadGigs(filterBy))
    }, [])

    return (
        <section className="gigs-app-container">
            <div className="main-wrapper">
                <div className="app-header">
                    <div className="main-header sticky">
                        {/* {offset ?
                        <CategoriesNavHeader style={{ visibility: 'visible' }}
                            onChangeCategory={onChangeCategory} />
                        : <CategoriesNavHeader style={{ visibility: 'hidden' }}
                            onChangeCategory={onChangeCategory} />} */}
                        <AppHeader />
                    </div>
                </div>

                <div className="main-content-container">
                    <div className="gigs-list-containers">
                        
                        <GigList gigs={gigs} />
                    </div>
                </div>
            </div>
        </section>
    )
}
