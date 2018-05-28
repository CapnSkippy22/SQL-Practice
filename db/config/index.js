const Sequelize = require('sequelize');

const connection = new Sequelize('countries', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
})

connection.authenticate()
  .then(() => {
    console.log('successfully connected to database');
  })
  .catch((err) => {
    console.log('error connecting to database:', err);
  })

  module.exports.connection = connection;