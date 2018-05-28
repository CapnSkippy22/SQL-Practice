const express = require('express');
const parser = require('body-parser');
const path = require('path');

require('../db/config');

const PORT = 1337;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error starting server:', err);
  } else {
    console.log('Server Listening on PORT:', PORT);
  }
})