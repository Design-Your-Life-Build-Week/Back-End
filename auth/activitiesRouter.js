const router = require('express').Router()
const restricted = require('./auth-middleware.js')
const jwt = require('jsonwebtoken')
const Acts = require('./activitiesModel.js')

router.get('/', (req, res) => {
    Acts.find()
        .then(activities => {
            res.status(200).json(activities)
        })
        .catch(error => {
            res.status(500).json({message: 'failed to retrieve'})
        })
})

router.post('/', (req, res) => {
    const activityData = req.body
    Acts.insert(activityData)
        .then(activities => {
            res.status(200).json(activities)
        })
        .catch(error => {
            res.status(500).json({message: "failed to post"})
        })
})

module.exports = router