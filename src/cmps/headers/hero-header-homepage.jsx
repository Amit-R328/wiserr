import React, { useState } from 'react'
import { SearchBar, ArrowInButtonLeftGrey, ArrowInButtonRightGrey, ArrowInButtonLeftBlack, ArrowInButtonRightBlack } from '../../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import { HeroCarousel } from './hero-carousel.jsx'

export const HeroHeaderHomePage = (props) => {

    return (
        <div className="hero-wrapper hero-andrea">

            <div className="hero-backgrounds"><HeroCarousel />

            </div>
        </div>
    )
}

