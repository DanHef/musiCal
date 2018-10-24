var express = require('express');
var router = express.Router();
const Dates = require('../model/date.model');

router.get('/', function (req, res) {
    const newDate = new Dates({
        day: new Date(),
        description: 'TestTest2'
    });

    newDate.save().then(() => {
        Dates.find(function (error, dates) {
            if (!error) {
                res.send(dates);
            } else {
                res.send('Read Error');
            }
        });

    })
    .catch(() => {
        res.send('error');
    });

    res.send('All Dates');
});

router.get('/:id/attendees', function (req, res) {
    res.send('All Attendees for Date');
});

module.exports = router;