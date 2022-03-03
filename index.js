const strHelp = require('scoopy-str-helper')
const dateHelp = require('datelibjs')

const myData = require('./data.json')

//print all data to console
const printData = (data) => {
    for (let i = 0; i < data.length; i++){
        console.log(combineFirstAndLast(data[i].first_name, data[i].last_name))
        
    }
}

const combineFirstAndLast = (firstName, lastName) => {
    return strHelp.capitalize(firstName) + ' ' + strHelp.capitalize(lastName)
}

printData(myData)
