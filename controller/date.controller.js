var express = require('express');
var router = express.Router();
const Dates = require('../model/date.model');

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
    const newDate = new Dates({
        fromDay: new Date().getDate(),
        fromTime: new Date().getTime(),
        toDay: new Date().getDate(),
        toTime: new Date().getTime(),
        description: 'TestTest2',
        type: 'SM'
    });

    newDate.save()
    .then(() => {
        res.send("Created Successfully");
    })
    .catch(() => {
        res.send('error');
    });
});

router.get('/:id/attendees', function (req, res) {
    res.send('All Attendees for Date');
});

module.exports = router;