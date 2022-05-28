import React from "react";

export const GigReview = ({ review }) => {
    if (!review.userImage) review.userImage = "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
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