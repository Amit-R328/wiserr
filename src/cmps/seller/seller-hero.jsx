import React from 'react'
import VideoPlayer from "react-background-video-player"
import { useSelector } from 'react-redux'


export const SellerHero = () => {
    const { loggedInUser } = useSelector((storeState) => storeState.userModule)

    return (
        <div className="seller-hero">
            <VideoPlayer
                className="video"
                src={
                    "https://res.cloudinary.com/dcbbqlssh/video/upload/v1657391657/video/seller-video_lbtgde.mp4"
                }
                autoPlay={true}
                muted={true}
                loop={true}
            />

            <div class="hero-text">
                <h1 class="catch-phrase">Work Your Way</h1>
                <p class="catch-phrase">You bring the skill. We'll make earning easy.</p>
                {!loggedInUser  ? <a href="/join" className="open-popup-join-seller">Become a Seller</a> : <a href="/seller/add-gig" className="open-popup-join-seller">Add New Gig</a>}
            </div>
            <aside class="hero-stats">
                <div class="box-row container">
                    <ul>
                        <li>
                            A Gig is Bought Every<br></br>
                            <strong>4 sec</strong>
                        </li>
                        <li>
                            Transactions<br></br>
                            <strong>50M+</strong>
                        </li>
                        <li>
                            Price Range<br></br>
                            <strong>$5 - $10,000</strong>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

