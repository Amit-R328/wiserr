import React from 'react'
import { Search } from '../search.jsx'

export const SellerHero = () => {
    return (
        <div className="seller-details-container">
            <div className="seller-hero-container flex container">

                <div className="seller-hero-left">
                    <h1 className="expertise"><i className="font-domaine">Expertise</i><span>,</span><p>When you need it</p></h1>
                    <p className="seller-connect">Connect with vetted experts, execute every project, and expand your team capabilities</p>
                    <Search />
                </div>
                <img className="seller-img-background" alt=""></img>
            </div>
        </div>
    )
}

