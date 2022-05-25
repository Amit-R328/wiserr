import React, { useState } from 'react'
import { LogoFull, HamburgerMenu, Language, RightArrowShowMore } from '../services/svg.service.js'
import { NavLink } from 'react-router-dom'
import {GigList} from '../cmps/gig-list.jsx'

export class gigPage extends React.Component{
    state = {
        filter: {
            categories: []
        }
    }

    componentDidMount(){
        this.props.loadGigs()
    }

    render(){
        const {gigs} = this.props
        return(
            <section className="gigs-app-container">
                {!gigs} ? <h1>Loading</h1> : <GigList gigs={gigs}/>
            </section>
        )
    }
}  
