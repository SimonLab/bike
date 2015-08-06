require('../lib/env.js');
var test = require('tape');
var server = require('../api/server.js');
var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);

test('testing /users route', function (t) {
  server.inject({method: 'GET', url: '/users'}, function (response) {
    t.equal(response.statusCode, 200);
    server.stop();
    t.end();
  });
});

test('testing /incr route', function (t) {
  var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
  client.auth(redisURL.auth.split(":")[1]);

  client.get("ind", function (err, result) {
    server.inject({method: 'GET', url: '/incr'}, function (response) {
      t.equal(Number(response.result), Number(result) + 1);
      server.stop();
      client.quit();
      t.end();
    });
  });
});
