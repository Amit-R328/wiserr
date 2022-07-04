export const utilService = {
    makeId,
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



