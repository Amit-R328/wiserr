import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from "react-router-dom";
import { WhiteHeart, BlackHeart } from "../services/svg.service";
import { userService } from '../services/user.service.js';
import { getLoggedinUser } from '../store/actions/user.actions.js';
import { useState } from "react";
import { updateGig } from '../store/actions/gig.actions.js'

export const GigPreview = ({ gig, reviews }) => {
    const price = gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const [likedBy, setLikedBy] = useState(false)
    // console.log('price',price )


    let images
    // console.log('gig',gig )
    if (gig) {
        images = gig.imgUrl.map((img) => {
            return { original: img, thumbnail: img }
        })
    }

    const onGoToDetails = (ev) => {
        console.log('event', ev)
        ev.stopPropagation()
        // ev.preventDefault()
        navigate(`/categories/${gig._id}`)
    }

    const ToggleHeart = (ev, likedBy) => {
        // ev.preventDefault()
        ev.stopPropagation()
        setLikedBy(!likedBy)
        dispatch(getLoggedinUser())
        if (!loggedInUser) {
            console.log('Need go login')
            // showSuccessMsg('Need go login')
        } else {
            console.log('loggedInUser', loggedInUser)
            const likedByUser = {
                "_id": loggedInUser._id,
                "fullName": loggedInUser.userName,
                "imgUrl": loggedInUser.imgUrl
            }

            console.log('likedByUser', likedByUser)
            console.log('gig', gig)
            if (gig.likedByUsers) gig.likedByUsers.push(likedByUser)
            else gig.likedByUsers = [gig.likedByUsers.push(likedByUser)]
            console.log('gig', gig)
            dispatch(updateGig(gig))
        }
    }

    return (

        <li className="gig-preview" >
            {/* <article className="gig-card"> */}
            {/* <Link to={`/categories/${gig._id}`}> */}
            <div className="gig-img-container">
                {/* <img className="gig-img" src={`${gig.imgUrl[0]}`} alt='gig' /> */}
                <ImageGallery stopPropagation={true} showThumbnails={false} showPlayButton={false} items={images} />
            </div>

            <div className="info" onClick={onGoToDetails}>


                <div className="seller-info">
                    {/* <div className="owner-avatar"> */}
                    <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="owner" />
                    <div className="owner-name">{gig.owner.fullName}</div>
                    {/* </div> */}
                </div>

                <div className="gig-title">
                    <p>{gig.title.substr(0, 75)}...</p>
                </div>
                <div className="gig-rate">
                    <StarIcon />
                    <div className="avg-rate">4.9</div>
                    {/* <span className="num-of-rate">(113)</span> */}
                </div>
                {/* </Link> */}
            </div>
            <div className="card-fav-price" onClick={onGoToDetails}>
                <div className="heart-btn"><button className="fav-btn" onClick={(ev) => ToggleHeart(ev, likedBy)}>{(likedBy) ? <BlackHeart /> : <WhiteHeart />}</button></div>
                {/* <div className="heart-btn"><button className="fav-btn">❤</button></div> */}
                <div className="gig-price">
                    <h4 className="gig-price"><div className="price-text">STARTING AT</div>{price}</h4>
                </div>
            </ div>
            {/* </article> */}
        </li >
    )
}