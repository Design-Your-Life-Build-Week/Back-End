const router = require('express').Router()
const restricted = require('./auth-middleware.js')
const jwt = require('jsonwebtoken')