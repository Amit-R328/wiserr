import React from "react"
import { CategoriesNavHeader } from '../cmps/categories-nav-header.jsx'
import { HeroHeaderHomePage } from '../cmps/hero-header-homepage.jsx'
import { AppHeaderHomePage } from '../cmps/app-header-homepage.jsx'
import { AppFooter } from '../cmps/app-footer.jsx'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { setFilter } from "../store/actions/gigs.actions.js"

export const HomePage = (props) => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    

    const onChangeCategory = (category) => {
        filterBy = {...filterBy, category: category}
        dispatch(setFilter(filterBy))
        navigate('/categories')
        
    }

    return (
        <section>
            <div className="main-wrapper">
                <div className="app-header">
                    <div className="main-header sticky">
                        <AppHeaderHomePage />
                        <CategoriesNavHeader history={props.history} onChangeCategory={onChangeCategory} />
                    </div>
                    <HeroHeaderHomePage />
                </div>
                <div className="footer-container">
                    <AppFooter />
                </div>
            </div>


            {/* <HeroCarousel/> */}

        </section>
    )
}