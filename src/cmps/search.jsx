import React, { useState, useRef } from "react"
import { setFilter, loadGigs } from '../store/actions/gig.actions.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export const Search = ({ loc }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputRef = useRef()
    let { filterBy } = useSelector((storeState) => storeState.gigModule)

    const onSearch = (ev) => {
        ev.preventDefault()
        filterBy = { ...filterBy, txt: searchTerm }
        dispatch(setFilter(filterBy))
        inputRef.current.value = ''
        navigate('/categories')
        dispatch(loadGigs())
    }

    const handleChange = (ev) => {
        setSearchTerm(ev.target.value)
    }

    return (
        <div className="search-container">
                <input type="search"
                    className={`search-input ${(loc === 'heroCarousel') ? 'search-hero' : 'search-header'}`}
                    ref={inputRef}
                    onChange={handleChange}
                    placeholder={`${(loc === 'heroCarousel') ? 'Try "animated whiteboard"' : 'Find services'}`} />
                <button className={`${(loc === 'heroCarousel') ? 'search-hero-btn' : 'search-header-btn'}`} onClick={onSearch}>Search</button>
        </div>
    )
}

