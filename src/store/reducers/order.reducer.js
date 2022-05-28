const initialState = {
    orders: []
}

export function orderReducer(state = initialState, action) {
    let orders

    switch (action.type) {
        
        case 'SET_ORDERS':
            return { ...state, gigs: action.gigs }
        case 'GET_BY_ID':
            return { ...state, gig: action.gig }
        case 'GET_SELECTED':
            return { ...state, selectedOption: action.selectedOption }
        default:
            return state
    }
}