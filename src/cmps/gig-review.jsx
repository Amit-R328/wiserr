import React from "react";

export const GigReview = ({ review }) => {


    if (!review.userImage) review.userImage = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
    return (
        <React.Fragment>
            <article className="review-card flex">
                <div className="flex">

                    <img className="sml-review-img" src={review.userImage} alt="" />
                    <div className="review-owner-details">
                        <div className="name-and-stars">
                            <p className="reviewer-name">{review.userName}</p>
                            <div className="gig-rate gig-review-rate">
                                {review.stars && <div className="avg-rate">{review.stars}</div>}
                            </div>
                        </div>
                        <div className="rating">
                        </div>
                        <div className="user-country">
                            <img className="country-flag" src={`https://countryflagsapi.com/png/${review.userCountry}`} alt=""></img>
                            <p className="reviewer-userCountry">{review.userCountry}</p>
                        </div>
                    </div>
                </div>
            </article>

            <div className="review-txt">
                <p>{review.content}</p>
            </div>
        </React.Fragment>
    )
}