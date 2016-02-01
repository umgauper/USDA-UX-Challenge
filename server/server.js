/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var path = require('path');

// Setup server
var app = express();
var server = require('http').createServer(app);
//require('./config/express')(app);


app.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

//app.route('/*')
    // .get(function(req, res) {
      // res.sendfile(app.get('appPath') + '/index.html');
    // });


// Start server
server.listen(config.port, config.ip, () => {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;