import { connect } from 'react-redux'
import { IconContext } from 'react-icons'
import { LogoFullFooter, Copyright } from '../services/svg.service.js'
import { useSelector } from "react-redux";
import React, { useState } from 'react'

// import { removeFromCart, checkout } from '../store/car.actions'
import { UserMsg } from './user-msg.jsx'

export const AppFooter = (props) => {

    return (
        <div className="footer-left">
            <span className="footer-logo">
                <LogoFullFooter />
            </span>
            <p className="text-body-2 legal">
                <span className="copyright text-trunc">
                    <Copyright />
                    Wiserr International Ltd. 2022
                </span>
            </p>

        </div>
    )
}

