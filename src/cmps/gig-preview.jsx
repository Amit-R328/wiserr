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
import { orderService } from "../services/order.service";

export const GigPreview = ({ gig, reviews }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const [likedBy, setLikedBy] = useState(false)
    let price = gig.price
    let decNumber = 0

    let images
    if (gig) {
        images = gig.imgUrl.map((img) => {
            return { original: img, thumbnail: img }
        })

        decNumber = (price - Math.floor(price))
        price = Math.floor(price)
    }

    const onGoToDetails = (ev) => {
        ev.stopPropagation()
        navigate(`/categories/${gig._id}`)
    }

    const ToggleHeart = (ev, likedBy) => {

        ev.stopPropagation()
        if (!loggedInUser) {
            console.log('Need go login')
            navigate(`/login`)
        } else {
            const likedByUser = {
                "_id": loggedInUser._id,
                "fullName": loggedInUser.userName,
                "imgUrl": loggedInUser.imgUrl
            }

            //if theres is liked byUsers
            if (gig.likedByUsers) {
                const liked = gig.likedByUsers.filter(user => user._id === likedByUser._id)
                //if the user already did like we delte him                
                if (liked.length) {
                    let idx = gig.likedByUsers.findIndex(user => user._id === liked[0]._id)
                    gig.likedByUsers.splice(idx, 1)
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
    const getLikeByUser = () => {
        return gig.likedByUsers.some(user => user._id === loggedInUser._id)
    }

    return (
        <li className="gig-preview">
            <div className="gig-img-container">
                <ImageGallery stopPropagation={true} showThumbnails={false} showPlayButton={false} items={images} />
            </div>
            <div className="info" onClick={onGoToDetails}>
                <div className="seller-info">
                    <img className="sml-round-img" src={`${gig.owner.imgUrl}`} alt="owner" />
                    <div className="gig-preview-seller-detailed">
                        <p className="owner-name">{gig.owner.fullName}</p>
                    </div>
                </div>

                <div className="gig-title">
                    <p >{gig.title.substr(0, 70)}...</p>
                </div>
                <div className="gig-rate">
                    {gig.reviews.length ? <div className="avg-rate">{((gig.reviews.reduce((acc, review) => acc + (review.stars), 0)) / gig.reviews.length).toFixed(1)}<p className="rate-reviews-qty">({gig.reviewsQty})</p></div> :
                        <div className="avg-rate">4.9</div>}
                </div>
            </div>
            <footer className="card-footer" onClick={onGoToDetails}>
                <div className="heart-btn">
                    <button className={`fav-btn ${loggedInUser && getLikeByUser() ? 'like' : ''}`} onClick={(ev) => ToggleHeart(ev, likedBy)}></button>
                </div>
                <div className="gig-price">
                    <h4 className="gig-amount"><div className="price-text">STARTING AT</div>${price}<sup className="sup-price">{decNumber ? Math.floor(decNumber * 100) : " "}</sup></h4>
                </div>
            </ footer>
        </li >
    )
}