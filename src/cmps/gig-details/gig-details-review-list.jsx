import { ThumbUpBlack, ThumbUpBlue, ThumbDownBlack, ThumbDownBlue } from '../../services/svg.service.js'
import { AddReview } from '../add-review'
import { GigReview } from '../gig-review.jsx'

export const GigDetailsReviewList = ({onAddReview,loggedInUser, setAddReview, gig, isToggleAddReview,getThumb}) => {
    const BLACK = '#404145'
    const BLUE = '#446ee7'
    
    return (        
        <section className="review-list">
        <button className="add-review-btn" onClick={onAddReview}>Add Review</button>
        {isToggleAddReview && <AddReview user={loggedInUser} gig={gig} setAddReview={setAddReview}/>}
        {(gig.reviews.length) ? <section className="reviews">
            <h1 className="gig-reviews-title">Reviews</h1>
            {gig.reviews.map((review, idx) => {
                return <article key={review._id}>
                    <GigReview review={review} />
                    <div className='thumbs-container'>
                        <div className="thumbup-btn">
                            <button className="thumbs-btn" style={{ color: `${review.isHelpful ? BLUE : BLACK}` }} onClick={(ev) => getThumb(ev, gig, +idx, "up")}>
                                {review.isHelpful ? <ThumbUpBlue /> : <ThumbUpBlack />} Helpful
                            </button>
                        </div>
                        <div className="thumbdown-btn">
                            <button className="thumbs-btn" style={{ color: `${review.isNotHelpful ? BLUE : BLACK}` }} onClick={(ev) => getThumb(ev, gig, +idx, "down")}>
                                {review.isNotHelpful ? <ThumbDownBlue /> : <ThumbDownBlack />} Not Helpful
                            </button>
                            {review.isHelpful && <p className='helpful-text'>You found this review helpful.</p>}
                        </div>
                    </div>
                </article>
            })}
        </section> : <span></span>}

    </section>


    )
}