import {gigService} from "../../services/gig.service.js"

var subscriber

export function searchJobByName(){
    return async dispatch => {
        try {
            const jobs = await gigService.getJobByName()
            dispatch({
                type: 'SET_JOB_NAME',
                jobs
            }) 
        } catch(err) {
            console.error('Error:', err)
        }
    }
}

export function loadGigs(){
    return async (dispatch, getState) => {
        try {
            
            const gigs = await gigService.query()
            console.log('GIGS FROM JOBS.ACTION.JS:',gigs)
            const action = {type: 'SET_GIGS', gigs}
            dispatch(action)                
        } catch(err) {
            console.error('Error:', err)
        }
        if (subscriber) gigService.unsubscribe(subscriber)
            subscriber = (ev) => {
            console.log('Got notified', ev.data)
            dispatch(ev.data)
        }
        gigService.subscribe(subscriber)
    }
}

export function getById(gigId) {
    return async dispatch => {
        try {
        const gig = await gigService.getById(gigId)
        dispatch({
                    type: 'GET_BY_ID',
                    gig
                })        
        } catch(err) {
        console.error('Error:', err)
        }
    }
}
