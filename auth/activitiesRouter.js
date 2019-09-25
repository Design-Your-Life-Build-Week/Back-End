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

router.post('/', restricted, (req, res) => {
    const activityData = req.body
    Acts.insert(activityData)
        .then(activities => {
            res.status(200).json(activities)
        })
        .catch(error => {
            res.status(500).json({message: "failed to post"})
        })
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    const changes = req.body
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