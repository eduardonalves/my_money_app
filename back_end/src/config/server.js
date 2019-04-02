const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
//importa o middleware para permitir o acesso de origens diferentes
server.use(allowCors)
//Query parser para transformar os parametros da url de string para o tipo correto
server.use(queryParser())

server.listen(port, function(){
    console.log(`Backend is runnig on port ${port}`)
})

module.exports = server