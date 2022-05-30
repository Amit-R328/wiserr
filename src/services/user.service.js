import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { store } from '../store/root.reducer'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from './event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'
// var gWatchedUser = null;

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
    changeScore
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
    const user = await storageService.get('user', userId)
    console.log('user', user)
    // const user = await httpService.get(`user/${userId}`)
    // gWatchedUser = user;

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}

function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user;
}

async function login(userCred) {
    console.log('userCred', userCred)
    // const users = await storageService.query('user')
    let user = await httpService.post('auth/login', userCred)
    console.log('user', user)
    // let user = users.find(user => user.userName === userCred.userName && user.password === userCred.password)

    if (user) {
        // socketService.login(user._id)
        _handleLogin(user)
        return user
    }
}
async function signup(userCred) {
    try {
        // const users = await storageService.query('user')
        let users = await httpService.post('auth/login', userCred)
        const isUserExist = users.find(user => user.userName === userCred.userName && user.password === userCred.password)
        if (isUserExist) {
            const err = new Error('User already exist')
            throw err
        }
        
        userCred.avgOrdersRate = 0
        userCred.email = userCred.userName + '@gmail.com'
        userCred.facebook_account = ''
        userCred.google_account = ''
        userCred.twitter_account = ''
        userCred.imgUrl = ''
        userCred.isSeller = false
        userCred.level = ''
        const user = await storageService.post('user', userCred)
        // const user = await httpService.post('auth/signup', userCred)
        // socketService.login(user._id)
        _handleLogin(user)
        
        return user
    } catch (err) {
        console.dir(err)
        throw err
    }
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
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
    console.log('user', user)
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


// (async ()=>{
//     await userService.signup({fullname: 'gul071', userName: 'gul071', password:'gul071'})
//     await userService.signup({fullname: 'richarddavis438', userMame: 'richarddavis438', password:'richarddavis438'})
//     await userService.signup({fullname: 'courtney lasch', userName: 'courtney lasch', password:'courtney lasch'})
// })()



