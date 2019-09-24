const express = require('express')
const dbConnection = require ('../data/dbConfig.js')
const usersRouter = require('../users/users-router.js')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const categoriesRouter = require('../auth/categoriesRouter.js')

console.log('environment', process.env.DB_ENV)

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/api/users', usersRouter)
server.use('/api', categoriesRouter)


server.get('/', (req, res) => {
    res.send('api is up')
});

module.exports = server