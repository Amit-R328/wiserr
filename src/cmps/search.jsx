import React, { useState } from "react";
import { setFilter, loadGigs } from '../store/actions/gig.actions.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


export const Search = ({ loc }, handleScroll) => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let { filterBy } = useSelector((storeState) => storeState.gigModule)

    const onSearch = (ev) => {
        ev.preventDefault()
        filterBy = { ...filterBy, txt: searchTerm }
        dispatch(setFilter(filterBy))
        navigate('/categories')
        dispatch(loadGigs())
    }

    const handleChange = (ev) => {
        setSearchTerm(ev.target.value)
    }
    let className = (loc === 'heroCarousel') ? 'search-hero' : 'search-header'
    let placeholder = (loc === 'heroCarousel') ? 'Try "animated whiteboard"' : 'Find services'
    return (
        <div className="search-container">
            <label>
                <input type="search" className={`search-input ${className}`} onChange={handleChange} placeholder={`${placeholder}`} />
                {/* <SearchIcon/> */}
            </label>
            <button className={`${className}-btn`} onClick={onSearch}>Search</button>
        </div>
    )

}

