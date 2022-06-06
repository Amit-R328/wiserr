import React from 'react'
import { FacebookLogo, GoogleLogo, NetflixLogo, PGLogo, PayPalLogo } from '../../services/svg.service.js'

export const TrustedBy = () => {
    return (
        <ul className="brands-container flex clean-list">
            <p>Trusted By:</p>
            <div className="brands flex">
                <li className="trusted-by"><FacebookLogo /></li>
                <li className="trusted-by"><GoogleLogo /></li>
                <li className="trusted-by"><NetflixLogo /></li>
                <li className="trusted-by "><PGLogo /></li>
                <li className="trusted-by"><PayPalLogo /></li>
            </div>
        </ul>
    )
}