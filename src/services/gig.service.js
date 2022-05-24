import Axios from 'axios'
import { getActionRemoveGig, getActionAddGig, getActionUpdateGig } from '../store/actions/gig.action.js'
import { httpService } from './http.service.js'

// const STORAGE_KEY = 'gig'
// const BASE_URL = '/api/gig/'
const gigChannel = new BroadcastChannel('gigChannel')

const gLabels = ["all", "on wheels", "box game", "art", "baby", "doll", "puzzle", "outdoor"]

export const gigService = {
    query,
    getById,
    save,
    remove,
    getAllGigs,
    getNumOfPages,
    subscribe,
    unsubscribe,
    saveUserRating,
    getDataForCharts,
    getLabels,
}
const PAGE_SIZE = 4
const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? '/api/gig/'
        : 'http://localhost:3030/api/gig/'

var axios = Axios.create({
    withCredentials: true,
})

function getAllGigs() {
    query()
        .then(gigs => gigs)
}

function getLabels() {
    return gLabels
}

async function query(filterBy = {} ){
    console.log('filter by - query -gig.service', filterBy)
    
    const {txt = '', inStock = '', labels ='', pageIdx = '', sortBy = 'createdAt'} = filterBy
    const url = `?txt=${txt}&inStock=${inStock}&labels=${labels}&pageIdx=${pageIdx}&sortBy=${sortBy}`
    const urlToRequest = BASE_URL+url
    const gigs = await axios.get(urlToRequest)
    if(pageIdx === '') return gigs
    let fromIdx = +filterBy.pageIdx * PAGE_SIZE
    let gigsByPage = gigs.data.slice(fromIdx, fromIdx+PAGE_SIZE)
    // return gigs.data
    return gigsByPage
}

async function getDataForCharts() {
    const labels = getLabels()
    let gigs = await query()
    gigs = gigs.data
    console.log('GIGS FROM GIG SERVICE LINE 60:', gigs)
    const pricePerType = labels.reduce((acc, label) => {
        let sum = 0
        let count = 0
        gigs.forEach(gig => {
            if (gig.labels.includes(label)) {
                count++
                sum += +gig.price
            }
        })
        acc[label] = sum / count
        console.log('ACC:',acc )
        return acc
    }, {})
    const invPerType = labels.reduce((acc, label) => {
        let sum = 0
        gigs.forEach(gig => {
            if (gig.inStock && gig.labels.includes(label)) {
                sum += 1
            }
        })
        acc[label] = sum
        return acc
    }, {})

    // })


    return [
        _creataDataChart(Object.keys(pricePerType), 'Avg price per category', Object.values(pricePerType), 'Price'),
        _creataDataChart(Object.keys(invPerType), 'Amount per type', Object.values(invPerType), 'Category')

    ]

}
function _creataDataChart(labels, title, data, label) {
    return {
        title,
        labels,
        datasets: [
            {

                label,
                data,
                backgroundColor: [
                    'rgba(255, 20, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 45, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 69, 64, 1)',
                    'rgba(255, 120, 120, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 120, 120, 1)',

                ],
                borderWidth: 1,
            },
        ]

    }
}

function getById(gigId) {
    // return axios.get(BASE_URL + gigId).then(res => res.data)
    const gig = httpService.get(`gig/${gigId}`)
    return gig
}

async function remove(gigId) {
    
    // await axios.delete(BASE_URL + gigId)
    await httpService.delete(`gig/${gigId}`)
    gigChannel.postMessage(getActionRemoveGig(gigId))
    return gigId
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        console.log('BASE_URL + gig._id',BASE_URL + gig._id )
        // savedGig = await httpService.put(`gig/${gig._id}`,gig)
        savedGig = await axios.put(BASE_URL + gig._id, gig)
        savedGig = savedGig.data
        gigChannel.postMessage(getActionUpdateGig(savedGig))
    } else {
        savedGig = await axios.post(BASE_URL, gig)
        savedGig = savedGig.data
        gigChannel.postMessage(getActionAddGig(savedGig))
    }
    return savedGig
}


async function getNumOfPages() {

    const gigs = await query()    
    const gigsQty = gigs.data.length / PAGE_SIZE
    return gigsQty
    // return JSON.parse(localStorage.getItem(STORAGE_KEY)).length / PAGE_SIZE
}

function subscribe(listener) {
    gigChannel.addEventListener('message', listener)
}

function unsubscribe(listener) {
    gigChannel.removeEventListener('message', listener)
}

async function saveUserRating(gig) {
    const savedGig = await axios.put(BASE_URL + gig._id, gig)
    console.log(savedGig)
    // return savedGig
}