const router = require('express').Router()
const restricted = require('./auth-middleware.js')
const jwt = require('jsonwebtoken')
const db = require('../data/dbConfig.js')
const Users = require('./categoriesModel.js')



router.get('/', restricted, (req, res) => {
    Users.getCategories()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(error => {
            res.status(500).json({message: "failed to retrieve"})
        })
})

router.get('/:id', restricted, (req, res) => {
    const {id} = req.params
    Users.getCategoryByUser(id)
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(error => {
            res.status(500).json({message: 'failed to retrieve'})
        })
})

router.post('/', restricted, (req, res) => {    
    const categoryData = req.body
    Users.insert(categoryData)
        .then(category => {
            res.status(200).json(category)
        })
    .catch(error =>{
        res.status(500).json({message: "Failed to post"})
    })
})

router.get('/activities/:id', restricted, (req, res) => {
    const {id} = req.params
    Users.activities(id)
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(error => {
            res.status(500).json({message: "could not retrieve"})
        })
})

router.delete('/:id', restricted, (req, res) => {
    const {id} = req.params
    Users.remove(id)
        .then(deleted => {
            if(deleted) {
                return res.status(204).end()
            } else {
                res.status(404).json({message: "Could not delete"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "failed to delete"})
        })
})

module.exports = router