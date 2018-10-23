const express = require('express');
const app = express();

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    const Schema = mongoose.Schema;

    let datesSchema = new Schema({
        day: { type: Date, required: true },
        description: { type: String, required: true }
    });

    const Dates = mongoose.model('Dates', datesSchema);

    app.get('/', function (req, res) {
        const newDate = new Dates({
            day: new Date(),
            description: 'TestTest2'
        });

        newDate.save().then(() => {
            Dates.find(function(error, dates) {
                if(!error) {
                    res.send(dates);
                } else {
                    res.send('Read Error');
                }
            });
            
        })
        .catch(() => {
            res.send('error');
        });
    });

    app.listen(8888, function () {
        console.log("Server listening on port 8888");
    });
});
