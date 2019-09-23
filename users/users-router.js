const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./users-model.js')
const router = express.Router();



router.post('/register', (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password, 10)
    Users.add(newUser)
    .then(registeredUser => {
        res.send(registeredUser)
    })
});




module.exports = router;