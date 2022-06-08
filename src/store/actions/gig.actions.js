import { gigService } from "../../services/gig.service.js"
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'


export function getActionRemoveGig(gigId) {
    return {
        type: 'REMOVE_GIG',
        gigId
    }
}

export function getActionAddGig(gig) {
    return {
        type: 'ADD_GIG',
        gig
    }
}

export function getActionUpdateGig(gig) {
    return {
        type: 'UPDATE_GIG',
        gig
    }
}

var subscriber

export function searchGigByName() {
    return async dispatch => {
        try {
            const gigs = await gigService.getGigByName()
            dispatch({
                type: 'SET_GIG_NAME',
                gigs
            })
        } catch (err) {
            console.error('Error:', err)
        }
    }
}

export function loadGigs() {
    return async (dispatch, getState) => {
        try {
            const filterBy = getState().gigModule.filterBy
            const gigs = await gigService.query(filterBy)
            const action = { type: 'SET_GIGS', gigs }
            dispatch(action)
        } catch (err) {
            console.error('Error:', err)
        }
        if (subscriber) gigService.unsubscribe(subscriber)
        subscriber = (ev) => {
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
        } catch (err) {
            console.error('Error:', err)
        }
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        return dispatch({
            type: 'SET_FILTERBY',
            filterBy,
        })
    }
}

export function removeGig(gigId) {
    return async dispatch => {
        try {
            await gigService.remove(gigId)
            dispatch(getActionRemoveGig(gigId))
            showSuccessMsg('Gig removed Successfully!')
        } catch (err) {
            console.error('Error:', err)
            showErrorMsg(err.response.data)
            // showErrorMsg('Gig was not removed')
        }
        if (subscriber) gigService.unsubscribe(subscriber)
        subscriber = (ev) => {
            dispatch(ev.data)
        }
        gigService.subscribe(subscriber)
    }
}


export function updateGig(gig) {

    return async dispatch => {
        try {
            const savedGig = await gigService.save(gig)

            dispatch(getActionUpdateGig(gig))
            // showSuccessMsg('Gig saved Successfully!')
        } catch (err) {
            console.error('Error:', err)
            // showErrorMsg('Gig was not saved')
            // showErrorMsg(err.response.data)
        }

        if (subscriber) gigService.unsubscribe(subscriber)
        subscriber = (ev) => {
            dispatch(ev.data)
        }
        gigService.subscribe(subscriber)
    }

}

export function saveGig(gig) {
    return async dispatch => {
        try {
            const savedGig = await gigService.save(gig)
            dispatch(getActionAddGig(savedGig))
            // showSuccessMsg('Gig saved Successfully!')
        } catch (err) {
            console.error('Error:', err)
            // showErrorMsg(err.response.data)
        }
        if (subscriber) gigService.unsubscribe(subscriber)
        subscriber = (ev) => {
            dispatch(ev.data)
        }
        gigService.subscribe(subscriber)
    }
}

export function addGig(gig) {
    return async dispatch => {
        try {
            const savedGig = await gigService.save(gig)
            dispatch(getActionAddGig(gig))
            showSuccessMsg('Gig added Successfully!')
        } catch (err) {
            console.error('Error:', err)
            // showErrorMsg('Gig was not added')
            showErrorMsg(err.response.data)
        }
        if (subscriber) gigService.unsubscribe(subscriber)
        subscriber = (ev) => {
            console.log('Got notified', ev.data)
            dispatch(ev.data)
        }
        gigService.subscribe(subscriber)
    }
}
