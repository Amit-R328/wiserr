import {jobService} from "../../services/job.service.js"

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
            const filterBy = getState().jobModule.filterBy
            const gigs = await jobService.query(filterBy)
            dispatch({
                type: 'SET_GIGS',
                gigs
            })                
        } catch(err) {
            console.error('Error:', err)
        }
    }
}
