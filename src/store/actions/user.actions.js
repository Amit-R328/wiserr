import { userService } from "../../services/user.service.js";
import { showErrorMsg } from '../../services/event-bus.service.js'


export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}

export function login(credentials) {
    return async (dispatch) => {
        try {

            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.log('Cannot login', err)
        }
    }
}



export function signup(credentials) {

    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)

            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.log('Cannot signup', err)
        }

    }
}

export function logout() {

    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
        } catch (err) {
            showErrorMsg('Cannot logout')
            console.log('Cannot logout', err)
        }
    }
}

export async function loadUser(userId) {

    try {
        const user = await userService.getById(userId);
        return user

    } catch (err) {
        showErrorMsg('Cannot load user')
        console.log('Cannot load user', err)
    }

}

export function getLoggedinUser() {

    return async (dispatch) => {
        try {
            const user = await userService.getLoggedinUser()
            dispatch({ type: 'SET_LOGGED_USER', user })
        } catch (err) {
            console.log('Cannot load user', err)
        }
    }
}
