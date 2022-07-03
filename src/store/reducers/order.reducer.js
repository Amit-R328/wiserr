const initialState = {
    orders: [],
    order: {}
}

export function orderReducer(state = initialState, action) {
    let orders


    switch (action.type) {
        case 'SET_ORDER':
            orders = state.orders.map(order => order._id === action.order._id ? action.order : order)
            return { ...state, order: action.order, orders }
        case 'SET_ORDERS':
            return { ...state, orders: action.orders }
        case 'GET_BY_ID':
            return { ...state, order: action.order }
        case 'ADD_ORDER':
            return { ...state, orders: [action.order, ...state.orders] }
        case 'GET_SELECTED':
            return { ...state, selectedOption: action.selectedOption }
        default:
            return state
    }
}