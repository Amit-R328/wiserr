import React from 'react'
import { connect } from 'react-redux'
// import React, { useState } from 'react'
// import { LogoFull, HamburgerMenu, Language, RightArrowShowMore } from '../services/svg.service.js'
// import { NavLink } from 'react-router-dom'
import { loadGigs } from '../store/actions/gigs.actions.js'
import {GigList} from '../cmps/gig-list.jsx'

export class _GigPage extends React.Component{
    state = {
        filter: {
            categories: []
        }
    }

    componentDidMount(){
        this.props.loadGigs()
        console.log('THIS PROPS:', this.props)
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

const mapStateToProps = (storeState) => {
    return {
        gigs: storeState.gigModule.gigs,
    }
}

const mapDispatchToProps = {
    loadGigs,
}

export const GigPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(_GigPage)
