import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { gigService } from "../../services/gig.service.js"
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'

export const HeroPopularCategories = () => {
    const [popularCategories, setPopularCategories] = useState([])
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        let res = await gigService.getPopularCategories()
        setPopularCategories(res)
        return res
    }

    const onChangeCategory = (category) => {
        filterBy = { txt: '', priceMin: 0, priceMax: Infinity, deliveryDate: 0, category: category }
        dispatch(setFilter(filterBy))
        navigate('/categories')
        dispatch(loadGigs())
    }

    return (
        <ul>
            {popularCategories.map((category, idx) => {
                return (
                    <li key={idx}>
                        <button className="btn-popular-category" onClick={() => onChangeCategory(category.param)}>{category.title}</button>
                    </li>
                )
            })}
        </ul>
    )
}