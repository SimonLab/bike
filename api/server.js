var Hapi = require('hapi');
var server = new Hapi.Server();
var Path = require('path');
var routes = require(Path.join(__dirname, 'routes.js'));

server.connection({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 8000
});

server.route(routes);
module.exports = server;
