var test = require('tape');
var server = require('../api/server.js');
var redis = require('redis');

test('testing the connection with redis', function (t) {

  var client = redis.createClient();
  client.on('connect', function() {
    t.pass("The connection with redis is ready");
    client.end();
    t.end();
  });

  client.on('error', function(err) {
    client.end();
    t.fail(err);
    t.end();
  });
});
