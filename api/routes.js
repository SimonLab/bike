var Path = require('path');
var home = require(Path.join(__dirname, 'handlers/home.js'));

var routes = [
  {
  method: 'GET',
  path: '/',
  handler: home
  }
];

module.exports = routes;
