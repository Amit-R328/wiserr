import React from "react";

export const GigReview = ({ review }) => {
    return (
        <React.Fragment>
            <article className="review-card flex">
                <div className="flex">
                    <img className="sml-review-img" src={review.userImage} alt="" />
                    <p className="reviewer-name">{review.userName}</p>
                    <p>
                        <i className="fa fa-star filled"></i>
                        <span className="review-rate">{review.stars}</span>
                    </p>
                </div>
            </article>
            <div className="review-txt">
                <p>{review.content}</p>
            </div>
        </React.Fragment>
    )
}