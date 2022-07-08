import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'
import { useSelector, useDispatch } from 'react-redux'

export const NavCategories = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeCategory = (category) => {
        filterBy = { txt: '', priceMin: 0, priceMax: Infinity, deliveryDate: 0, category: category }
        dispatch(setFilter(filterBy))
        navigate('/categories')
        dispatch(loadGigs())
    }
    
    const categories = [{ name: 'All Categories', parameter: '' },
    { name: 'Graphics & Design', parameter: 'Graphics & Design' },
    { name: 'Digital Marketing', parameter: 'Digital Marketing' },
    { name: 'Writing & Translation', parameter: 'Writing & Translation' },
    { name: 'Video & Animation', parameter: 'Video & Animation' },
    { name: 'Business', parameter: 'Business' },
    { name: 'Lifestyle', parameter: 'Lifestyle' }
    ]
    
    return (
        <div className="categories-menu-scroll container">
            <ul className="categories">
                {categories.map((category, index) => <li key={index}>
                    <button onClick={() => onChangeCategory(category.parameter)}>{category.name}</button>
                </li>)}
            </ul>
        </div>
    )
}

