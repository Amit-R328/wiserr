import { reviewService } from "../../services/review.service.js"


export function getActionRemoveReview(reviewId) {
  return { type: 'REMOVE_REVIEW', reviewId }
}
export function getActionAddReview(review) {
  return { type: 'ADD_REVIEW', review }
}

export function loadReviews(filterBy) {

  return async dispatch => {
    try {
      const reviews = await reviewService.query(filterBy)
      dispatch({ type: 'SET_REVIEWS', reviews })
    } catch (err) {
      console.log('err in loadReviews in reviewActions:', err)
    }
  }
}

export function addReview(review) {

  return async dispatch => {
    try {

      const addedReview = await reviewService.add(review)
      dispatch(getActionAddReview(addedReview))

    } catch (err) {
      console.log('ReviewActions: err in addReview', err)
      throw err
    }
  }
}

export function removeReview(reviewId) {
  return async dispatch => {
    try {
      await reviewService.remove(reviewId)
      dispatch({ type: 'REMOVE_REVIEW', reviewId })
    } catch (err) {
      console.log('err in removeReview in reviewAction:', err)
    }
  }
}