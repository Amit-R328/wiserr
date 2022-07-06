import React from 'react'
import {SellerHero} from './seller-hero.jsx'

export const SellerHomepage = () => {
    return (
        <section>
            <div className="app-header-seller">
                <SellerHero/>
            </div>

            <section className="seller-trusted-by-brands seller-max-width-container">
                <ul className="seller-brands-container">
                    <p>Trusted By:</p>
                    <li><button className="brand-6 seller-brand-box"><p>L'<span>O</span>REAL</p></button></li>
                    <li><button className="brand-7 seller-brand-box">Unilever</button></li>
                    <li><button className="brand-8 seller-brand-box"><p>888.COM</p></button></li>
                    <li><button className="brand-9 seller-brand-box">MyHeritage</button></li>
                </ul>
            </section>
        </section>

    )
}








