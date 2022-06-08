import { useState } from "react"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export const RatingValue = ({ handleRatingChange, reviewId }) => {
    const [value, setValue] = useState(0)
    const [isFilled, setIsFilled] = useState(true)

    const getStyle = () => {
        return isFilled ? { '& .MuiRatingIconFilled': { color: '#ff8eb0' } } : { '& .MuiRatingIconHover': { color: '#ff004c' } }
    }

    const handleOnChange = (e, reviewId, newValue) => {
        setValue(newValue);
        let rateIndex = reviewId.stars.findIndex(r => r.reviewId === reviewId);
        if (rateIndex === -1) {
            reviewId.stars.push({ reviewId: reviewId, stars: newValue });
        } else {
            reviewId.stars[rateIndex] = { reviewId: reviewId, stars: newValue };
        }
        handleRatingChange(reviewId);
    }
    const getAvg = (stars) => {
        let avgRating = null
        if (stars.length > 0) {
            let sum = 0;
            stars.forEach(r => sum += r.stars)
            avgRating = (sum / stars.length).toFixed(1)
        }
        return avgRating
    }
    const avgRating = getAvg(reviewId.stars)
    const rateStyle = getStyle()

    return (
        <>
            <Rating
                name="stars"
                value={avgRating}
                getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<StarIcon fontSize="inherit" />}
                style={rateStyle}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                onChange={(event, newValue) => handleOnChange(event, reviewId, newValue)}
            />
            {avgRating !== undefined && avgRating !== null && <h4><span>{avgRating}</span> (<span className="number-rates">{reviewId.stars.length}</span>)</h4>}
            {!avgRating && avgRating !== 0 && <span>no ratings yet</span>}
        </>

    )
}



