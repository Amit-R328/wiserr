import React, { useState, useEffect } from 'react';
import { loadGigs } from '../store/actions/gigs.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
import { FilterGigs } from '../cmps/filter-gigs.jsx'
import { CategoriesNavHeader } from '../cmps/headers/categories-nav-header.jsx'
import { AppHeader } from '../cmps/headers/app-header.jsx'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from "../store/actions/gigs.actions.js"
import { AppHeaderHomePage } from '../cmps/headers/app-header-homepage.jsx'


export const GigPage = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const { gigs } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
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

    const onChangeCategory = (category) => {
        console.log('CATEGORY',category )
        filterBy = { ...filterBy, category: category }
        dispatch(setFilter(filterBy))
        console.log('FILTERBY FROM ONCHANGECATEGORY:', filterBy)
        navigate('/categories')
        dispatch(loadGigs())
    }
    // const renderAppHeader = () => {
    //     const arr = window.location.href.split('/')
    //     if ( arr[0] === 'localhost:3000')  {
    //         return (<AppHeaderHomePage />)
    //     } else {
    //         return (<AppHeader />)
    //     }
    // } 
    return (
        // <section className="gigs-app-container">
        <div className="main-wrapper">
            <div className="app-header">
                <div className="main-header sticky">
                    {/* {renderAppHeader()} */}
                    {offset ?
                        <CategoriesNavHeader style={{ visibility: 'visible' }}
                            onChangeCategory={onChangeCategory} />
                        : <CategoriesNavHeader style={{ visibility: 'hidden' }}
                            onChangeCategory={onChangeCategory} />}
                </div>
            </div>

            <main className="main-content-container">
                <div className="gigs-list-containers">
                    <FilterGigs />
                    <GigList gigs={gigs} />
                </div>
            </main>


        </div>
        // </section>
    )
}
