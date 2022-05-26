

import { gigService } from '../services/gig.service.js';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


export const GigDetails = (props) =>{

    // const { user } = useSelector((storeState) => storeState.userModule)
    // const {toys} = useSelector((storeState) =>  storeState.toyModule)
    const { gig } = useSelector((storeState) => storeState.toyModule)
    const { reviews } = useSelector((storeState) => storeState.reviewModule)
    const dispatch = useDispatch()


}