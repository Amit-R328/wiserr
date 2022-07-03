export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    setDateTime,
    getMonthNumber,
    getYearNumber

}

function makeId(length = 6) {
    let txt = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    let words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    let txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function setDateTime(userDate) {

    let date = new Date(userDate).toISOString()
    date = date.replace('T', ' ')
    date = date.replace('Z', ' ')
    let res = date.substr(0, 11)
    // let res = date.substr(0,19)
    return res
}


function getMonthNumber(userDate) {

    let date = new Date(userDate).toISOString()
    date = date.replace('T', ' ')
    date = date.replace('Z', ' ')
    let res = date.substr(5, 2)
    // let res = date.substr(0,19)
    return +res
}


function getYearNumber(userDate) {

    let date = new Date(userDate).toISOString()
    date = date.replace('T', ' ')
    date = date.replace('Z', ' ')
    let res = date.substr(0, 4)
    // let res = date.substr(0,19)
    return +res
}



