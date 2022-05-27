import { reviewService } from "../../services/review.service.js"


export function getActionRemoveReview(reviewId) {
    return { type: 'REMOVE_REVIEW', reviewId }
  }
  export function getActionAddReview(review) {
    return { type: 'ADD_REVIEW', review }
  }

export function loadReviews(filterBy){
  console.log('FILTER BY LINE 12 ACTIONS', filterBy)
  return async dispatch => {
    try {
      const reviews = await reviewService.query(filterBy)
      console.log("load Reviews: filterby:", filterBy)
            dispatch({type: 'SET_REVIEWS', reviews})
        }catch (err){
            console.log('err in loadReviews in reviewActions:', err)
        }
    }
}

export function addReview(review) {
    console.log('GOT REVIEW',review);
  return async dispatch => {
    try {
        console.log('review got',review);

      const addedReview = await reviewService.add(review)
      dispatch(getActionAddReview(addedReview))
      
    } catch (err) {
      console.log('ReviewActions: err in addReview', err)
      throw err
    }
  }
}

export function removeReview(reviewId){
    return async dispatch => {
        try {
            await reviewService.remove(reviewId)
            dispatch ({type: 'REMOVE_REVIEW', reviewId})
        }catch (err){
            console.log('err in removeReview in reviewAction:',err)
        }
    }
}