//load environment variables
require('dotenv').config();

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const dates = require('./controller/event.controller');
const users = require('./controller/user.controller');
const auth = require('./controller/auth.controller');

const app = express();

//DB Model
const { UserEntity, DateEntity } = require('./model/sequelizeModel');

//Body Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//authentication management
passport.serializeUser(function(user, cb) {
	cb(null, JSON.stringify(user));
});

passport.deserializeUser(function(packet, cb) {
	cb(null,JSON.parse(packet));
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

passport.use(new LocalStrategy(
    function (username, password, done) {
        UserEntity.findAll({
            where: {
                username: username
            }
        }).then((result) => {
            if (result.length === 0) {
                done(null, false);
            } else {
                if(result[0].password === password) {
                    done(null, result[0]);
                } else {
                    done(null, false);
                }
            }
        });
    }
));

app.use(passport.initialize());
app.use(passport.session());

//CORS
app.use(function (req, res, next) {
    console.log
    res.header("Access-Control-Allow-Origin", process.env.CORS_ALLOWED_ORIGIN);
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", true);

    if(req.method === 'OPTIONS') {
        res.sendStatus(204);
    }
    else {
        next();
    }
});


//Routes
app.use('/users', users);
app.use('/events', dates);
app.use('/auth', auth);

//start server
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8888, function () {
    console.log("Server listening on port 8888");
});

//mongoose
//const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

//const User = require('./model/user.model');
//const Dates = require('./model/date.model');