var express = require('express');
var router = express.Router();
const { UserEntity, EventEntity } = require('../model/sequelizeModel');

const authenticationMiddleware = require('../middlewares/authentication.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const roleType = require('../model/role-type');
const eventType = require('../model/event-type');

//get all existing events
router.get('/', authenticationMiddleware, roleMiddleware(roleType.NORMAL), async function (req, res) {
    const events = await EventEntity.findAll();

    res.send(JSON.stringify(events));
});


//create a new event
router.post('/', authenticationMiddleware, roleMiddleware(roleType.MODERATOR), async function (req, res) {
    const body = req.body;

    try {
        const result = await EventEntity.create({
            fromDate: body.fromDate,
            toDate: body.toDate,
            description: body.description,
            type: body.type,
        });

        res.send(result);
        res.sendStatus(201);
    } catch {
        res.sendStatus(409);
    }
});


// assign user to event
router.post('/:id/attendees', authenticationMiddleware, roleMiddleware(roleType.MODERATOR), async function (req, res) {
    /* expected data structure
    userId: uuid
    status: integer
    */
    try {
        const userId = req.body.userId;
        const status = req.body.status;

        const events = await EventEntity.findAll({
            where: {
                id: req.params.id
            }
        });

        const event = events[0];
        if (!event) {
            res.sendStatus(400);
            return;
        }

        const users = await UserEntity.findAll({
            where: {
                id: userId
            }
        });

        const user = users[0];
        if (!user) {
            res.sendStatus(400);
            return;
        }

        await event.addUser(user, { through: { status: status }});

        res.sendStatus(201);
    } catch(error) {
        res.sendStatus(409);
    }
});


//get all attendees and their current status for a date
//this route might not be necessary since the attendees are included in the get all dates route
router.get('/:id/attendees', function (req, res) {
    res.send('All Attendees for Date');
});


//get a single event
router.get('/:id', async function (req, res) {
    try {
        const event = await EventEntity.findAll({
            where: {
                id: req.params.id
            }
        });

        res.send(event);
    } catch (error) {
        res.sendStatus(400);
    }
});

module.exports = router;