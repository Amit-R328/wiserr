import React from "react"
import { loadGigs, setFilter } from '../../store/actions/gig.actions.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export const CategoriesCarousel = () => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let slideCategories = [
        {
            elementName: 'Graphics & Design',
            legends: 'Build your brand',
            title: 'Logo Design',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862448/logo-design-2x_zmqxkh.webp'
        },
        {
            elementName: 'Digital Marketing',
            legends: 'Customize your site',
            title: 'WordPress',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862504/wordpress-2x_ykq9xd.webp'
        },
        {
            elementName: 'Business',
            legends: 'Learn your business',
            title: 'Data Entry',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862554/data-entry-2x_fv7elm.webp'
        },
        {
            elementName: 'Video & Animation',
            legends: 'Engage your audience',
            title: 'Video Explainer',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862592/animated-explainer-2x_fm4q6h.jpg'
        },
        {
            elementName: 'Digital Marketing',
            legends: 'Reach more customers',
            title: 'Social Media',
            img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1656862621/social-2x_crn0um.webp'
        }
    ]

    const onChangeCategory = (category) => {
        filterBy = { txt: '', priceMin: 0, priceMax: Infinity, deliveryDate: 0, category: category }
        dispatch(setFilter(filterBy))
        navigate('/categories')
        dispatch(loadGigs())
    }

    return (
        <div className="slider-container">
            <ul className="slider-categories-list">
                {slideCategories.map(category =>
                    <li key={category}>
                        <div className="slide" onClick={() => onChangeCategory(`${category.elementName}`)}>
                            <h4 className="category-legends"><small>{category.legends}</small><br></br><span>{category.title}</span></h4>
                            <img alt={category.title} src={category.img} />
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}




