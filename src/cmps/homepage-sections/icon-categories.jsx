import React  from "react"
import { GraphicsDesignIcon, WritingTranslationIcon, VideoAnimationIcon, OnlineMarketingIcon, LifeStyleIcon, MusicAudioIcon, AllCategoriesIcon, BusinessIcon } from '../../services/svg.service.js'
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
            <h2 className="marketplace-title">Explore the marketplace</h2>
            <ul className="icon-categories-list">
                <li>
                    <button onClick={() => onChangeCategory('All Categories')} className="icon-all">
                        <AllCategoriesIcon /> All Categories
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Graphics & Design')} className="graphic-icon">
                        <GraphicsDesignIcon /> Graphics &amp; Design
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Digital Marketing')} className="marketing-icon">
                        <OnlineMarketingIcon />Digital Marketing
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Writing & Translation')} className="writing-icon">
                        <WritingTranslationIcon />Writing &amp; Translation
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Video & Animation')} className="video-icon">
                        <VideoAnimationIcon />Video &amp; Animation
                    </button>
                </li>
                {/* <li>
                    <button onClick={() => onChangeCategory('Music & Audio')} className="audio-icon">
                        <MusicAudioIcon />Music &amp; Audio
                    </button>
                </li>*/}
                 <li> 
                    <button onClick={() => onChangeCategory('Business')} className="business-icon">
                        <BusinessIcon />Business
                    </button>
                </li>
                <li>
                    <button onClick={() => onChangeCategory('Lifestyle')} className="lifestyle">
                        <LifeStyleIcon />Lifestyle
                    </button>
                </li>
            </ul>
        </div >
    )
}