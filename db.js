const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'test', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433',
    operatorsAliases: false,
    logging: false
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports = sequelize;
