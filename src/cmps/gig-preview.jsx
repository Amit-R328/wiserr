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
    const price = gig.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const [likedBy, setLikedBy] = useState(false)
<<<<<<< HEAD
    // let user = (gig) ? dispatch(loadUser(gig.owner._Id)) :  ''
    let [className, setClassName] = useState('')
=======
>>>>>>> 75e66f417fb57f0fb110abeaac6499a534f1cd01

    let images
    if (gig) {
        images = gig.imgUrl.map((img) => {
            return { original: img, thumbnail: img }
        })
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
            // showSuccessMsg('Need go login')
        } else {
<<<<<<< HEAD
            // console.log('loggedInUser', loggedInUser)
=======
>>>>>>> 75e66f417fb57f0fb110abeaac6499a534f1cd01
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
<<<<<<< HEAD
               
                 } else {
                     //else he insert into the collection
                     gig.likedByUsers.push(likedByUser)
                     setLikedBy(true)
                     setClassName('liked')
                 }
=======
                } else {
                    //else he insert into the collection
                    gig.likedByUsers.push(likedByUser)
                    setLikedBy(true)
                }
>>>>>>> 75e66f417fb57f0fb110abeaac6499a534f1cd01
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
                    <p >{gig.title.substr(0, 40)}...</p>
                </div>
                <div className="gig-rate">
                    {gig.reviews.length ? <div className="avg-rate">{((gig.reviews.reduce((acc, review) => acc + (review.stars), 0)) / gig.reviews.length).toFixed(1)}</div> :
                        <div className="avg-rate">4.9</div>}
                </div>
            </div>
            <footer className="card-footer" onClick={onGoToDetails}>
                <div className="heart-btn">
<<<<<<< HEAD
                    <button className={`fav-btn ${className}`} onClick={(ev) => ToggleHeart(ev, likedBy)}>
                        
                   {/* {loggedInUser && getLikeByUser() ? <BlackHeart /> : <WhiteHeart />} */}
                  {/* {loggedInUser && getLikeByUser() ? 'liked' : ''} */}
                  
                </button>
=======
                    <button className="fav-btn" onClick={(ev) => ToggleHeart(ev, likedBy)}>
                        {loggedInUser && getLikeByUser() ? <BlackHeart /> : <WhiteHeart />}
                        <div className={loggedInUser && getLikeByUser() ? 'like' : <span></span>}></div>
                    </button>
>>>>>>> 75e66f417fb57f0fb110abeaac6499a534f1cd01
                </div>
                <div className="gig-price">
                    {/* <h4 className="gig-amount"><div className="price-text">S<span className="gig-price-title">TARTIN</span>G&nbsp; <span className="gig-price-title">AT</span></div>{price}</h4> */}
                    <h4 className="gig-amount"><div className="price-text">STARTING AT</div>{price}</h4>
                </div>
            </ footer>
        </li >
    )
}