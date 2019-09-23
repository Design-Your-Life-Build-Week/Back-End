const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./users-model.js')
const router = express.Router();
const jwt = require('jsonwebtoken')
const knex = require('knex')
const knexfile = require('../knexfile.js')
const knexConfig = knexfile.development
const db = knex(knexConfig)



router.post('/register', (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password, 10)
    Users.add(newUser)
    .then(registeredUser => {
        res.status(201).json({message: "You are registered"})
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.post('/login', (req, res) =>{
    let {username, password} = req.body
    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({message: `Welcome ${user.username}!`, token})
        } else {
            res.status(401).json({message: "This is not a registered user"})
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.get('/registered', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => res.send(error))
})

router.get('/logs/:id', (req, res) => {
    const {id} = req.params
    Users.yeah(id)
    .then(logs => {
        res.json(logs)
    })
    .catch(error => res.send(error))
})

function generateToken(user) {
    const payload = {
        username: user.username
    }
    const secret = "keep it secret, keep it safe"
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secret, options)
}






module.exports = router;