const initialState = {   
    gig: null,
    filterBy: {
        txt: '',
        priceMin: 0,
        priceMax: Infinity,
        deliveryDate: 0,
        category: '',
        sortBy: 'title'
    },
    gigs: []
}

export function gigsReducer(state = initialState, action) {
    let gigs

    switch (action.type) {
        case 'SET_JOB_NAME':
            return { ...state, searchJob: action.jobs }
        case 'SET_GIGS':
            return { ...state, gigs: action.gigs }
        case 'ADD_GIG':
            gigs = [action.gig, ...state.gigs]
            return { ...state, gigs }
        case 'REMOVE_GIG':
            gigs = state.gigs.filter(gig => gig._id !== action.gigId)
            return { ...state, gigs }
        case 'UPDATE_GIG':
            gigs = state.gigs.map(currgig =>
                (currgig._id === action.gig._id) ? action.gig : currgig)
            return { ...state, gigs }
        case 'SET_FILTERBY':
            return { ...state, filterBy: action.filterBy }
        case 'GET_BY_ID':
            return { ...state, gig: action.gig }
        case 'GET_SELECTED':
            return { ...state, selectedOption: action.selectedOption }
        default:
            return state
    }
}