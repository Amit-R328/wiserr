import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from "react-router-dom";
import { WhiteHeart, BlackHeart } from "../services/svg.service";
import { useState } from "react";
import { updateGig } from '../store/actions/gig.actions.js'
import { loadUser } from "../store/actions/user.actions";

export const GigPreview = ({ gig, reviews }) => {
    const price = gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const [likedBy, setLikedBy] = useState(false)
    // let user = (gig) ? dispatch(loadUser(gig.owner._Id)) :  ''

    let images
    if (gig) {
        images = gig.imgUrl.map((img) => {
            return { original: img, thumbnail: img }
        })
    }


    // useEffect(() => {
    //     const user = dispatch(loadUser(gig.owner._Id))        
    // }, [])


    const onGoToDetails = (ev) => {
        ev.stopPropagation()
        navigate(`/categories/${gig._id}`)
    }

    const ToggleHeart = (ev, likedBy) => {
        ev.stopPropagation()
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

            //if theres is liked byUsers
            if (gig.likedByUsers) {
                const liked = gig.likedByUsers.filter(user => user._id === likedByUser._id)
                //if the user already did like we delte him
                if(liked.length) {
                  
                    let idx = gig.likedByUsers.findIndex(user => user._id === liked[0]._id)                  
                    gig.likedByUsers.splice(idx,1)
                    setLikedBy(false)
               
                 } else {
                     //else he insert into the collection
                     gig.likedByUsers.push(likedByUser)
                     setLikedBy(true)
                 }
            } else {
                gig.likedByUsers = [gig.likedByUsers.push(likedByUser)]
            }
            dispatch(updateGig(gig))
        }
    }

    const getLikeByUser =() => {
        return gig.likedByUsers.some(user => user._id === loggedInUser._id )
    }


return (
        <li className="gig-preview">
            <div className="gig-img-container">
                <ImageGallery stopPropagation={true} showThumbnails={false} showPlayButton={false} items={images} />
            </div>
            <div className="info" onClick={onGoToDetails}>
                <div className="seller-info">
                    <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="owner" />
                    <div className="gig-preview-seller-detailes">
                        <p className="owner-name">{gig.owner.fullName}</p>
                        {/* <p className="owner-name">{user.level}</p> */}
                    </div>
                </div>

                <div className="gig-title">
                    <p >{gig.title.substr(0, 40)}...</p>
                </div>
                <div className="gig-rate">
                    <div className="avg-rate">4.9</div>
                </div>
            </div>
            <footer className="card-footer" onClick={onGoToDetails}>
                <div className="heart-btn">
                    <button className="fav-btn" onClick={(ev) => ToggleHeart(ev, likedBy)}>
                   {loggedInUser && getLikeByUser() ? <BlackHeart /> : <WhiteHeart />}
                </button>
                </div>
                <div className="gig-price">
                    <h4 className="gig-amount"><div className="price-text">S<span className="gig-price-title">TARTIN</span>G&nbsp; <span className="gig-price-title">AT</span></div>{price}</h4>
                </div>
            </ footer>
        </li >
    )
}