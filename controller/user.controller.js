var express = require('express');
var router = express.Router();
const authenticationMiddleware = require('../middlewares/authentication.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const roleType = require('../model/role-type');

const { UserEntity } = require('../model/sequelizeModel');

//get all existing user
router.get('/', authenticationMiddleware, roleMiddleware(roleType.MODERATOR), async function (req, res) {
    const users = await UserEntity.findAll();
    res.send(users);
});


//create a new user
router.post('/', authenticationMiddleware, roleMiddleware(roleType.NORMAL), function (req, res) {
    const body = req.body;

    const newUser = new UserEntity({
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