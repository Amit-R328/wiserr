import React from "react"
import StarRatings from 'react-star-ratings'
import { reviewService } from "../services/review.service.js"

export class AddReview extends React.Component {
    state = {
        txt: "",
        rating: 0
    }

    changeRating = (newRating) => {
        this.setState(prevState => ({...prevState, rating: newRating}))
    }

    handleChange = ({ target }) => {
        this.setState(prevState => ({ ...prevState, txt: target.value }))
    }

    submit = async (ev) => {
        ev.preventDefault()
        const { user, gig } = this.props
        const newReview = await reviewService.add(this.state.txt, this.state.rating, user, gig)
        this.props.setAddReview(false)

    }

    render() {
        return (<section className="review-add">
            <div className="review-add-header">
                <form className="comment-form" onSubmit={this.submit}>
                    <h2 className="rating-review">How would you rate this gig?</h2>
                    <StarRatings
                        rating={this.state.rating}
                        starRatedColor="#ffb33e"
                        changeRating={this.changeRating}
                        starDimension="20px"
                        starSpacing="0px"
                        starHoverColor="#ffb33e"
                    />
                    <h2 className="title">Share with the community your experience when working with this seller.</h2>
                    <textarea className="rating-review-txt" name="txt" value={this.state.txt} onChange={this.handleChange} rows={5} cols={50}></textarea>
                    <button type="submit" className="comment-post-btn">Save</button>
                </form>
            </div>
        </section>)
    }
}