const fs = require('fs')


function log(content){

    let today = new Date() 
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear() 

    today = mm + '/' + dd + '/' + yyyy 

    let horloge = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") 

    let logFile = fs.createWriteStream(`${__dirname}/../logs/latest.log`, { flags: 'a' })
    logFile.write(`[${today}] at ${horloge}: ${content}\n`)
    console.log(content)
}

module.exports = log