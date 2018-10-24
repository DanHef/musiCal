var express = require('express');
var router = express.Router();
const Dates = require('../model/date.model');


//get all existing dates
router.get('/', function (req, res) {
    Dates.find(function (error, dates) {
        if (!error) {
            res.send(dates);
        } else {
            res.send('Read Error');
        }
    });
});


//create a new date
router.post('/', function (req, res) {
    const body = req.body;

    const newDate = new Dates({
        fromDay: body.fromDay,
        fromTime: body.fromTime,
        toDay: body.toDay,
        toTime: body.toTime,
        description: body.description,
        type: body.dateType
    });

    newDate.save()
        .then(() => {
            res.send("Created Successfully");
        })
        .catch(() => {
            res.send('error');
        });
});


//get all attendees and their current status for a date
//this route might not be necessary since the attendees are included in the get all dates route
router.get('/:id/attendees', function (req, res) {
    res.send('All Attendees for Date');
});


//get a single date
router.get('/:id', function (req, res) {
    Dates.findById(req.params.id, function(error, date) {
        if(!error) {
            res.send(date);
        } else {
            res.send('Date not found');
        }
    });
});

module.exports = router;