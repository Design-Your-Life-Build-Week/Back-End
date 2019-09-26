const router = require('express').Router()
const restricted = require('./auth-middleware.js')
const jwt = require('jsonwebtoken')
const Acts = require('./activitiesModel.js')

router.get('/', restricted, (req, res) => {
    
    Acts.find()
        .then(activities => {
            res.status(200).json(activities)
        })
        .catch(error => {
            res.status(500).json({message: 'failed to retrieve'})
        })
})

router.get('/:id', restricted, (req, res) => {
    const {id} = req.params
    Acts.findById(id)
        .then(activity => {
            if (activity) {
                res.json(activity)
            } else {
                res.status(404).json({message: "could not find with ID"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "Failed to get activity"})
        })
})


router.post('/', restricted, (req, res) => {
    const activityData = req.body
    const users_id = req.user.id
    console.log('req', req.user)
    console.log('user_id', users_id)
    
    if(activityData.starRating < 1 || activityData.starRating > 5) {
        return res.status(400).json({message: "StarRating must be 1-5"})
    } 
    Acts.insert({...activityData, users_id})
        .then(activities => {
            res.status(200).json(activities)
        })
        .catch(error => {
            res.status(500).json({message: "failed to post"})
            console.log(error)
        })
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    
    const changes = req.body
    if(changes.starRating < 1 || changes.starRating > 5) {
        return res.status(400).json({message: "StarRating must be 1-5"})
    }
    console.log(changes)
    
     Acts.findById(id)
        .then(activity => {
            if (activity) {
               return Acts.update(id, changes)
                .then(updatedActivity => {                    
                    res.json(updatedActivity)
                })
            } else {
                res.status(404).json({message: "Could not find activity with ID"})
            }
        })
        .catch(error => {
            res.status(500).json({message: 'Failed to update'})
        })
})

router.delete('/:id', restricted, (req, res) => {
    const {id} = req.params
    Acts.remove(id)
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