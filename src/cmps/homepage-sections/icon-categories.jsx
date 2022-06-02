import React from "react";
import { GraphicsDesignIcon, BusinessIcon, WritingTranslationIcon, VideoAnimationIcon, ProgrammingIcon, OnlineMarketingIcon, LifeStyleIcon, MusicAudioIcon, DataIcon } from '../../services/svg.service.js'
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
                <li>
                {/* <li onClick={() => onChangeCategory('Video & Animation')}> */}
                    <a href="/categories/video-animation">
                        <VideoAnimationIcon />Video &amp; Animation
                        </a>
                </li>
                <li>
                {/* <li onClick={() => onChangeCategory('Music & Audio')}> */}
                    <a href="/categories/music-audio">
                        <MusicAudioIcon />Music &amp; Audio
                        </a>
                </li>
                {/* <li>
                    <a href="/categories/programming-tech">
                        <ProgrammingIcon />Programming &amp; Tech</a>
                </li> */}
                {/* <li>
                    <a href="/categories/seller">
                        <BusinessIcon />Seller</a>
                </li> */}
                <li>
                    <a href="/categories/lifestyle">
                        <LifeStyleIcon />Lifestyle</a>
                </li>
                {/* <li>
                    <a href="/categories/data">
                        <DataIcon />Data</a>
                </li> */}
            </ul>
        </div>
    )
}