import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { store } from '../store/root.reducer'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from './event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    changeScore,

}

window.userService = userService


function getUsers() {

    return storageService.query('user')
    // return httpService.get(`user`)
}

function onUserUpdate(user) {

    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    store.dispatch({ type: 'SET_WATCHED_USER', user })
}

async function getById(userId) {

    const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {

    return storageService.remove('user', userId)
}

async function update(user) {

    const isSeller = user.isSeller
    user = await httpService.put(`user/${user._id}`, isSeller)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) {
        saveLocalUser(user)
    }
    return user;
}

async function login(userCred) {


    let user = await httpService.post('auth/login', userCred)

    if (user) {
        _handleLogin(user)
        return user
    }
}

async function signup(userCred) {

    try {

        let users = await httpService.get('user')
        const isUserExist = users.find(user => user.userName === userCred.userName && user.password === userCred.password)
        if (isUserExist) {
            const err = new Error('User already exist')
            throw err
        }

        const user = await httpService.post('auth/signup', userCred)
        _handleLogin(user)
        return user
    } catch (err) {
        console.dir(err)
        throw err
    }
}

async function logout() {

    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}

async function changeScore(by) {

    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}

function _handleLogin(user) {

    const miniUser = { _id: user._id, userName: user.userName, imgUrl: user.imgUrl, isSeller: user.isSeller }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(miniUser))
}

function saveLocalUser(user) {

    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


