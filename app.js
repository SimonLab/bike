var Path = require('path');
require(Path.join(__dirname, "/lib/env.js"));
var server = require(Path.join(__dirname,'api/server.js'));
server.start(function () {
  console.log("Bike server running at ", server.info.uri);
});

module.exports = server;
