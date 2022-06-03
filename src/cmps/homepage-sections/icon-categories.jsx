import React  from "react"
import { GraphicsDesignIcon, WritingTranslationIcon, VideoAnimationIcon, OnlineMarketingIcon, LifeStyleIcon, MusicAudioIcon } from '../../services/svg.service.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'

export const IconCategories = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const { gigs } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeCategory = (category) => {
        filterBy = { txt: '', priceMin: 0, priceMax: Infinity, deliveryDate: 0, category: category }
        dispatch(setFilter(filterBy))
        navigate('/categories')
        dispatch(loadGigs())
    }

    return (
        <div className="icon-categories">
            <h2>Explore the marketplace</h2>
            <ul className="icon-categories-list">
                <li>
                    <button onClick={() => onChangeCategory('All Categories')}>
                        <GraphicsDesignIcon /> All Categories
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Graphics & Design')}>
                        <GraphicsDesignIcon /> Graphics &amp; Design
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Digital Marketing')}>
                        <OnlineMarketingIcon />Digital Marketing
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Writing & Translation')}>
                        <WritingTranslationIcon />Writing &amp; Translation
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Video & Animation')}>
                        <VideoAnimationIcon />Video &amp; Animation
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Music & Audio')}>
                        <MusicAudioIcon />Music &amp; Audio
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Lifestyle')}>
                        <LifeStyleIcon />Lifestyle
                    </button>
                </li>
            </ul>
        </div >
    )
}