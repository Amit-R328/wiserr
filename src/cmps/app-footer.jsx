import { connect } from 'react-redux'
import { IconContext } from 'react-icons'
import { LogoFullFooter, Copyright, Instagram, Pinterest, LinkedIn, Facebook, Twitter } from '../services/svg.service.js'
import { useSelector } from "react-redux";
import React, { useState } from 'react'

// import { removeFromCart, checkout } from '../store/car.actions'

export const AppFooter = (props) => {

    return (
        <footer className="footer-bottom">
            <div className="footer-left flex">
                <div className="footer-logo">
                    <LogoFullFooter />
                </div>
                <p className="legal-text flex">
                    <span className="copyright-icon">
                        <Copyright />
                    </span>
                    All rights reserved to Wiserr ltd.
                </p>

            </div>
            <ul className="social-container flex">
                <li><Twitter /></li>
                <li><Facebook /></li>
                <li><LinkedIn /></li>
                <li><Pinterest /></li>
                <li><Instagram /></li>
            </ul>
        </footer>
    )
}

