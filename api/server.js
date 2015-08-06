var Path = require('path');
var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require(Path.join(__dirname, 'routes.js'));

server.connection({
  host: '0.0.0.0',
  port: Number(process.env.PORT)
});

server.route(routes);
module.exports = server;
