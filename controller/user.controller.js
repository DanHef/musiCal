var express = require('express');
var router = express.Router();
const User = require('../model/user.model');


//get all existing user
router.get('/', function (req, res) {
    User.find(function (error, users) {
        if (!error) {
            res.send(users);
        } else {
            res.send('Read Error');
        }
    });
});


//create a new user
router.post('/', function (req, res) {
    const body = req.body;

    const newUser = new User({
        lastname: body.lastname,
        firstname: body.firstname,
        email: body.email,
        role: body.role
    });

    newUser.save()
        .then(() => {
            res.send("User Created Successfully");
        })
        .catch(() => {
            res.send('User Creation Error');
        });
});

module.exports = router;