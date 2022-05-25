import {jobService} from "../../services/job.service.js"

var subscriber

export function searchJobByName(){
    return async dispatch => {
        try {
            const jobs = await jobService.getJobByName()
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
            // const filterBy = getState().jobModule.filterBy
            const gigs = await jobService.query()
            console.log('GIGS FROM JOBS.ACTION.JS:',gigs)
            dispatch({
                type: 'SET_GIGS',
                gigs
            })                
        } catch(err) {
            console.error('Error:', err)
        }
        if (subscriber) jobService.unsubscribe(subscriber)
            subscriber = (ev) => {
            console.log('Got notified', ev.data)
            dispatch(ev.data)
        }
        jobService.subscribe(subscriber)
    }
}
