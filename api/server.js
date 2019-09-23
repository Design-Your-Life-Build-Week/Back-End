const express = require('express')
const dbConnection = require ('../data/dbConfig.js')
const usersRouter = require('../users/users-router.js')
const server = express()

server.use(express.json())
server.use('/api/users', usersRouter)


server.get('/', (req, res) => {
    res.send('api is up')
});

module.exports = server