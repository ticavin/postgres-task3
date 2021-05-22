var express = require('express');
var app = express();
const {DataTypes } = require('sequelize');
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller');
var User = require('./models/user')(db, DataTypes);
var Game = require('./models/game')(db, DataTypes);


db.sync();
app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
User.sync();
Game.sync();
app.listen(function() {
    console.log("App is listening on 4000");
})