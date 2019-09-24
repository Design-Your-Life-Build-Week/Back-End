const router = require('express').Router()
const restricted = require('./auth-middleware.js')
const jwt = require('jsonwebtoken')
const db = require('../data/dbConfig.js')
const Users = require('./categoriesModel.js')

router.get('/categories', (req, res) => {
    return db('categories')
    .then(cats => {
        res.status(200).json(cats)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get('/categories/:id', (req, res) => {
    const {id} = req.params
    Users.findCategoriesAndActivities(id)
    .then(categories => {
        res.json(categories)
    })
    .catch(error => {
        res.status(500).json({message: "Could not find"})
    })
})

module.exports = router