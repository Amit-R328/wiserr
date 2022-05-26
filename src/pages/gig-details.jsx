

import { gigService } from '../services/gig.service.js';
import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getById } from '../store/actions/gigs.actions.js';


export const GigDetails = (props) =>{

    // const { user } = useSelector((storeState) => storeState.userModule)
    // const {toys} = useSelector((storeState) =>  storeState.toyModule)
    const { gig } = useSelector((storeState) => storeState.gigModule)
    // const { reviews } = useSelector((storeState) => storeState.reviewModule)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getById(params.gigId))
    })

    const onGoBack = () => {
        props.history.push('/categories')
    }

    if(!gig) return <h1>Loading</h1>

    return (
        <section className='gig-details'>
            <h3>{gig.title}</h3>
            <h3>{gig.price}</h3>
            {gig.imgUrl.map(img => <img src={`${img}`} alt=''/>)}
            <h3>{gig.owner.fullName}</h3>
            <h3>{gig.description.aboutThisGig}</h3>
            <h3>{gig.description.whyUs}</h3>
            <h3>{gig.description.whatDoYouGet}</h3>
        </section>
    )

}