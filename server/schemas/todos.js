const Sequelize = require('sequelize');

const { connection }  = require('../index.js');

const Todo = connection.define('todo', {
  name: {
    type: Sequelize.STRING,
    
  }
})