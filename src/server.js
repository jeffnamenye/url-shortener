//this sets contant for express and body-parser
const express = require('express');
const body_parser = require('body-parser');

// sets up the express functionality
const app = express();

// sets my  port to 3000
const port = 3000;

//sets the body-parser text as a json
app.use(body_parser.json());

//sets the body-parser text as the url encoded data
app.use(body_parser.urlencoded({
  extended: true,
}));

// links my routes
app.use('/api/v1.0', require('../routes/index')(express));

//sets my server to listen on port 3000
const server = app.listen(port, () => {
  console.log('Good to go on ' + port);
});
module.exports = server;
