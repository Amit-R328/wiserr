import React from 'react'
import { useSelector } from 'react-redux'

export const NavDetails = () => {
    const { gig } = useSelector((storeState) => storeState.gigModule)

    const scrollOverview = () => {
        const section = document.querySelector('.gig-details-container');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollDescription = () => {
        const section = document.querySelector('.about-details');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollAbout = () => {
        const section = document.querySelector('.about-seller');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const scrollReviews = () => {
        const section = document.querySelector('.reviews');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const onSharePage = () => {
        console.log('click from share')
    }


    // const categories = [{ name: 'Overview', parameter: '' },
    // { name: 'Description', parameter: 'Description' },
    // { name: 'About The seller', parameter: 'Digital Marketing' },
    // { name: 'Reviews', parameter: 'Writing & Translation' },
    // ]
    return (
        <div className="details-menu-scroll">
            <ul className="nav-details-sections">
                <button onClick={() => scrollOverview()}className="overview"></button>
                <button onClick={() => scrollDescription()}className="overview"></button>
                <button onClick={() => scrollAbout()}className="overview"></button>
                <button onClick={() => scrollReviews()}className="overview"></button>
                <button onClick={() => onSharePage()}className="overview"></button>
            </ul>
        </div>
    )
}

