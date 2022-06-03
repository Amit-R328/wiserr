import React, {useEffect} from "react"
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
        <div className="main-categories">
            <h2>Explore the marketplace</h2>
            <ul className="categories-list">
                <li>
                    <a href="/categories/graphics-design">
                    <GraphicsDesignIcon />
                    Graphics &amp; Design
                    </a>
                </li>
                <li>
                    <a href="/categories/online-marketing">
                    <OnlineMarketingIcon />Digital Marketing
                    </a>
                </li>
                <li>
                    <a href="/categories/writing-translation">
                        <WritingTranslationIcon />Writing &amp; Translation
                        </a>
                </li>
                <li onClick={() => onChangeCategory('Video & Animation')}>
                        <VideoAnimationIcon />Video &amp; Animation
                </li>
                <li onClick={() => onChangeCategory('Music & Audio')}>
                        <MusicAudioIcon />Music &amp; Audio
                </li>
                <li onClick={() => onChangeCategory('Lifestyle')}>
                        <LifeStyleIcon />Lifestyle
                </li>
            </ul>
        </div>
    )
}