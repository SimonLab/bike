var Path = require('path');
var home = require(Path.join(__dirname, 'handlers/home.js'));
var users = require(Path.join(__dirname, 'handlers/users.js'));
var redis = require(Path.join(__dirname, 'handlers/redis.js'))

var routes = [
{
  method: 'GET',
  path: '/',
  handler: home
},

{
  method: 'GET',
  path: '/users',
  handler: users
},
{
  method: 'GET',
  path: '/incr',
  handler: redis.incr
}


];

module.exports = routes;
