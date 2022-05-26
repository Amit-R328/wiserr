import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import React, { useState } from 'react'
// import { LogoFull, HamburgerMenu, Language, RightArrowShowMore } from '../services/svg.service.js'
// import { NavLink } from 'react-router-dom'
import { loadGigs } from '../store/actions/gigs.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
// import { useParams } from 'react-router-dom'
import { CategoriesNavHeader } from '../cmps/headers/categories-nav-header.jsx'
import { AppHeader } from '../cmps/headers/app-header.jsx'
import { AppFooter } from '../cmps/app-footer.jsx'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { setFilter } from "../store/actions/gigs.actions.js"


export const GigPage = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const { gigs } = useSelector((storeState) => storeState.gigModule)
    const [filter, SetFilter] = useState('')
    const [categories, SetCategories] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    //use effect listen to change in params key and value dispatch [param.category]

    useEffect(() => {
        dispatch(loadGigs())
    },[])

    // componentDidMount() {
    //     this.props.loadGigs()
    //     console.log('THIS PROPS:', this.props)
    // }

    const onChangeCategory = (category) => {
        console.log('CATEGORY',category )
        filterBy = { ...filterBy, category: category }
        dispatch(setFilter(filterBy))
        console.log('FILTERBY FROM ONCHANGECATEGORY:', filterBy)
        navigate('/categories')
        dispatch(loadGigs())
    }

    return (
        <section className="gigs-app-container">
            <div className="main-wrapper">
                <div className="app-header">
                    <div className="main-header sticky">
                        <AppHeader />
                        <CategoriesNavHeader onChangeCategory={onChangeCategory} />
                        {/* <CategoriesNavHeader history={props.history} onChangeCategory={onChangeCategory} /> */}
                    </div>
                </div>
                <main className="main-content-container">
                    <GigList gigs={gigs} />

                </main>
                <div className="footer-container">
                    <AppFooter />
                </div>
            </div>
        </section>
    )
}
