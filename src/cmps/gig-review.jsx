import React from "react";

// import { RatingValue } from './gig-rating.jsx'
// import { saveGigRating } from '../services/gig.service.js'
// import { reviewService } from '../services/review.service'

export const GigReview = ({ review }) => {

    // const handleRatingChange = (reviewId) => {
    //     // gigService.saveGigRating(gig)
    //     reviewService.addStarRate(reviewId)
    // }



    if (!review.userImage) review.userImage = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
    return (
        <React.Fragment>
            <article className="review-card flex">
                <div className="flex">
                    <img className="sml-review-img" src={review.userImage} alt="" />
                    <p className="reviewer-name">{review.userName}</p>
                
                    <br></br>
                    
                    <div className="rating">
                        {/* <span>
                            <RatingValue handleRatingChange={handleRatingChange} reviewId={review._Id} />
                        </span> */}
                    </div>

                    {/* <p> */}
                    {/* <i className="fa fa-star filled"></i>
                        <span className="review-rate">{review.stars}</span> */}
                    {/* </p> */}
                </div>
            </article>
            <div className="user-country">
                <img className="country-flag" src={`https://countryflagsapi.com/png/${review.userCountry}`}></img>
                <p className="reviewer-userCountry">{review.userCountry}</p>
            </div>

            <div className="review-txt">
                <p>{review.content}</p>
            </div>
        </React.Fragment>
    )
}