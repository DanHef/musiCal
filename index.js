const express = require('express');
const app = express();
const dates = require('./controller/date.controller');

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const dateModel = require('./model/date.model');

/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {*/



app.use('/dates', dates);

/*app.get('/', function (req, res) {
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
});*/

app.listen(8888, function () {
    console.log("Server listening on port 8888");
});
//});
