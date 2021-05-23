const express = require('express');
const app = express();
const {DataTypes } = require('sequelize');
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const User = require('./models/user')(db, DataTypes);
const Game = require('./models/game')(db, DataTypes);


db.sync();
app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(function() {
    console.log("App is listening on 4000");
})
User.sync();
Game.sync();