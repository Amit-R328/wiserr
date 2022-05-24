
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { getActionRemoveCar, getActionAddCar, getActionUpdateCar } from '../store/car.actions.js'

const STORAGE_KEY = 'car'
const carChannel = new BroadcastChannel('carChannel')
// const listeners = []

export const carService = {
    query,
    getById,
    save,
    remove,
    getEmptyCar,
    subscribe,
    unsubscribe
    
}
window.cs = carService;


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(carId) {
    return storageService.get(STORAGE_KEY, carId)
    // return axios.get(`/api/car/${carId}`)
}
async function remove(carId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    await storageService.remove(STORAGE_KEY, carId)
    carChannel.postMessage(getActionRemoveCar(carId))
}
async function save(car) {
    var savedCar
    if (car._id) {
        savedCar = await storageService.put(STORAGE_KEY, car)
        carChannel.postMessage(getActionUpdateCar(savedCar))
        
    } else {
        // Later, owner is set by the backend
        car.owner = userService.getLoggedinUser()
        savedCar = await storageService.post(STORAGE_KEY, car)
        carChannel.postMessage(getActionAddCar(savedCar))
    }
    return savedCar
}

function getEmptyCar() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}

function subscribe(listener) {
    carChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
    carChannel.removeEventListener('message', listener)
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




