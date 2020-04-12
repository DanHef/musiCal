var express = require('express');
var router = express.Router();
const passport = require('passport');

const { UserEntity } = require('../model/sequelizeModel');

router.post('/',
    passport.authenticate('local'),
                                   (req, res, next) => {
                                    res.status(200);
                                    res.send();
                                   }
);


router.post('/logout', function(req,res) {
    req.logout();
    res.send();
});

module.exports = router;