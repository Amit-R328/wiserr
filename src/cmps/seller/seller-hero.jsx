import React from 'react'
import {Search} from '../search.jsx'

export const SellerHero = () => {
    return (
        <div className="seller-details-container">
            <div className="seller-hero-img container">

                <div className="seller-hero-left">
                    <h1 className="font-domaine">
                        <h1 className="expertise"><i className="font-domaine">Expertise</i><span>,</span><p>When you need it</p></h1>
                    </h1>
                    <p class="seller-connect">Connect with vetted experts, execute every project, and expand your team capabilities</p>
                    <Search/>
                </div>
                <div className="seller-hero-right">
                    <img className="seller-img-background" alt=""></img>
                </div>
            </div>
        </div>
    )
}

