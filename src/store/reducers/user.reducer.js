const initialState = {
    // loggedInUser: userService.getLoggedinUser() || null,
    loggedInUser: null,
    users: [],
}

export function userReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case 'SET_LOGGED_USER':
            newState = { ...state, loggedInUser: action.user }
            break
        case 'SET_USER':
            newState = { ...state, loggedInUser: action.user }
            break
        case 'REMOVE_USER':
            newState = {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
            break
        case 'SET_USERS':
            newState = { ...state, users: action.users }
            break

        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState
}
