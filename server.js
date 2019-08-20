const express = require('express')
const  bodyParser= require('body-parser')

const PORT = 3000

const app = express()
const api = require('./router/api')
app.use(bodyParser.json());
app.use('/api', api)
app.get('/', function (req, res) {
    res.send('hi from server')
})
app.listen(PORT, function ()
{
    console.log('server runing ' + PORT)
})

