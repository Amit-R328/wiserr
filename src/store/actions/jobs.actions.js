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
