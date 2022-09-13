import React from "react"
import { GraphicsDesignIcon, WritingTranslationIcon, VideoAnimationIcon, OnlineMarketingIcon, LifeStyleIcon, AllCategoriesIcon, BusinessIcon } from '../../services/svg.service.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'

export const IconCategories = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let iconDetails = [
        {
            elementName: 'All Categories',
            className: 'icon-all',
            icon: <AllCategoriesIcon />,
            caption: 'All Categories'
        },
        {
            elementName: 'Graphics & Design',
            className: 'graphic-icon',
            icon: <GraphicsDesignIcon />,
            caption: 'Graphics & Design'
        },
        {
            elementName: 'Digital Marketing',
            className: 'marketing-icon',
            icon: <OnlineMarketingIcon />,
            caption: 'Digital Marketing'
        },
        {
            elementName: 'Writing & Translation',
            className: 'writing-icon',
            icon: <WritingTranslationIcon />,
            caption: 'Writing & Translation'
        },
        {
            elementName: 'Video & Animation',
            className: 'video-icon',
            icon: <VideoAnimationIcon />,
            caption: 'Video & Animation'
        },
        {
            elementName: 'Business',
            className: 'business-icon',
            icon: <BusinessIcon />,
            caption: 'Business'
        },
        {
            elementName: 'Lifestyle',
            className: 'lifestyle',
            icon: <LifeStyleIcon />,
            caption: 'Lifestyle'
        },
    ]

    const onChangeCategory = (category) => {
        filterBy = { txt: '', priceMin: 0, priceMax: Infinity, deliveryDate: 0, category: category }
        dispatch(setFilter(filterBy))
        navigate('/categories')
        dispatch(loadGigs())
    }

    return (
        <>
        {/* <div className="icon-categories flex flex-column"> */}
            <h2 className="marketplace-title">Explore the marketplace</h2>
            <ul className="icon-categories-list">
                {iconDetails.map(category =>
                    <li key={category.elementName}>
                        <button onClick={() => onChangeCategory(`${category.elementName}`)} className={category.className}>
                            {category.icon} <p>{category.caption}</p>
                        </button>
                    </li>
                )}
            </ul>
        {/* </div> */}
                </>
    )
}