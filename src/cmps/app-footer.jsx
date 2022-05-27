import { connect } from 'react-redux'
import { IconContext } from 'react-icons'
import { LogoFullFooter, Copyright } from '../services/svg.service.js'
import { useSelector } from "react-redux";
import React, { useState } from 'react'

// import { removeFromCart, checkout } from '../store/car.actions'

export const AppFooter = (props) => {

    return (
        <footer className="footer-bottom">
            <div className="footer-left">
                <h1 className="footer-logo">
                    <LogoFullFooter />
                </h1>
                <p className="text-body-2 legal">
                    All rights reserved to Wiserr ltd.    
                </p>

            </div>
            <div className="social-container flex">
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-github	'></i>
                <i className='	fab fa-twitter'></i>
            </div>
        </footer>
    )
}

