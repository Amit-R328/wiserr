import {gigService} from "../../services/gig.service.js"

var subscriber

export function searchGigByName(){
    return async dispatch => {
        try {
            const gigs = await gigService.getGigByName()
            dispatch({
                type: 'SET_GIG_NAME',
                gigs
            }) 
        } catch(err) {
            console.error('Error:', err)
        }
    }
}

export function loadGigs(){
    return async (dispatch, getState) => {
        try {
            // const filterBy = getState().gigModule.filterBy
            const gigs = await gigService.query()
            console.log('GIGS FROM GIGS.ACTION.JS:',gigs)
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
