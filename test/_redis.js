require('../lib/env.js');
var test = require('tape');
var server = require('../api/server.js');
var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);
// var redisURLLocal = url.parse(process.env.REDIS_LOCAL);


test('testing the connection with redis on heroku', function (t) {

  var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
  client.auth(redisURL.auth.split(":")[1]);
  client.on('connect', function() {
    t.pass("The connection with redis is ready on Heroku");
    client.end();
    t.end();
  });

  client.on('error', function(err) {
    t.fail(err);
    client.quit();
    t.end();
  });
});
//
// test('testing the connection with redis on localhost', function (t) {
//
//   var client = redis.createClient(redisURLLocal.port, redisURLLocal.hostname, {no_ready_check: true});
//   client.auth(redisURLLocal.auth.split(":")[1]);
//   client.on('connect', function() {
//     t.pass("The connection with redis is ready on localhost");
//     client.end();
//     t.end();
//   });
//
//   client.on('error', function(err) {
//     client.end();
//     t.fail(err);
//     t.end();
//   });
// });
