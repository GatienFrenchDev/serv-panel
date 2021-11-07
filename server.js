const express = require('express')
const ejs = require('ejs')
const fs = require('fs')

const app = express()

const config = require('./config/config.json')

const linux_command = require('./utils/linux_command')
const log = require('./utils/log')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public/'))  

port = config.port

app.listen(port, () =>{
    log(`Démarrage du serv panel  http://127.0.0.1:${port}`)
})

app.get('/', (req, res) =>{
    res.render(`${__dirname}/public/index.ejs`, {
        'port' : config.port
    })
})

app.post('/shutdown', (req, res) =>{
    let passwd = req.body.passwd
    if (passwd != config.passwd) return
    linux_command('shutdown -h +1')
    log(`the server will shut down in 1 minute ...`)
})

app.post('/script', async (req, res) =>{
    linux_command('./config/script.sh')
    log('starting the bash script ...')
})

app.post('/port', (req, res) =>{
    if (req.body.port == null) return
    let passwd = req.body.passwd
    if (passwd != config.passwd) return
    let content = JSON.parse(fs.readFileSync('config/config.json', 'utf8'))
    content.port = req.body.port
    fs.writeFileSync('config/config.json', JSON.stringify(content))
    log(`change of port for : ${content.port}`)
})