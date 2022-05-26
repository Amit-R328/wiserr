import React from "react"
import { CategoriesNavHeader } from '../cmps//headers/categories-nav-header.jsx'
import { HeroHeaderHomePage } from '../cmps/headers/hero-header-homepage.jsx'
import { AppHeaderHomePage } from '../cmps//headers/app-header-homepage.jsx'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { useSelector, useDispatch} from 'react-redux'
// import { setFilter } from "../store/actions/gigs.actions.js"

export const HomePage = (props, onChangeCategory) => {
    // let { filterBy } = useSelector((storeState) => storeState.gigModule)
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const params = useParams()

    

    // const onChangeCategory = (category) => {
    //     filterBy = {...filterBy, category: category}
    //     dispatch(setFilter(filterBy))
    //     navigate('/categories')
    // }

    return (
        <section>
            <div className="main-wrapper">
                <div className="app-header">
                    <div className="main-header sticky">
                        <AppHeaderHomePage />
                        <CategoriesNavHeader onChangeCategory={onChangeCategory}/>
                        {/* <CategoriesNavHeader onChangeCategory={onChangeCategory} test={'hi'}/> */}
                    </div>
                    <HeroHeaderHomePage />
                </div>
            </div>


            {/* <HeroCarousel/> */}

        </section>
    )
}