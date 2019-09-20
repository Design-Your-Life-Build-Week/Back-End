const express = require('express')
const dbConnection = require ('../data/dbConfig.js')
const server = express()

server.use(express.json())

module.exports = server