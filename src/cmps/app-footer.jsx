import { connect } from 'react-redux'
import { IconContext } from 'react-icons'
import { LogoFull, LogoFull2, Copyright, HamburgerMenu, Language, RightArrowShowMore } from '../services/svg.service.js'

import React, { useState } from 'react'

import { removeFromCart, checkout } from '../store/car.actions'
import { UserMsg } from './user-msg.jsx'

function _AppFooter({ count, cart, removeFromCart, checkout }) {

    return (
        <div className="footer-left">
            <span className="footer-logo">
                <LogoFull />
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


function mapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = {
}

export const AppFooter = connect(mapStateToProps, mapDispatchToProps)(_AppFooter)