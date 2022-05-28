const initialState = {
    orders: []
}

export function orderReducer(state = initialState, action) {
    let orders

    switch (action.type) {
        
        case 'SET_ORDERS':
            return { ...state, orders: action.orders }
        case 'GET_BY_ID':
            return { ...state, order: action.order }
        case 'GET_SELECTED':
            return { ...state, selectedOption: action.selectedOption }
        default:
            return state
    }
}