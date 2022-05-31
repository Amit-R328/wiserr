import React, { useState, useEffect } from "react";
import { setFilter, loadGigs } from '../store/actions/gig.actions.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'

export const Search = () => {
    const [searchResults, setSearchResults] = useState('')
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

    return (
        <React.Fragment>
            <label>
                <input type="search" className="search-input" onChange={handleChange} placeholder="Find services" />
            </label>
            <button className="co-white submit-button bg-co-green-700 search-btn" onClick={onSearch}>Search</button>
        </React.Fragment>
    )

}

