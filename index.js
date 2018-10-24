const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dates = require('./controller/date.controller');

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const User = require('./model/user.model');
const Dates = require('./model/date.model');

app.use(bodyParser.json());

app.use('/dates', dates);

app.listen(8888, function () {
    console.log("Server listening on port 8888");
});
