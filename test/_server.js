var Path = require('path');
require(Path.join(__dirname, "../lib/env.js"));
var test = require('tape');
var server = require('../api/server.js');

test('testing / route', function (t) {
  server.inject({method: 'GET', url: '/'}, function (response) {
    t.equal(response.statusCode, 200);
    t.end();
    server.stop();
  });
});
