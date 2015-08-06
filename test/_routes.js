var test = require('tape');
var server = require('../api/server.js');

test('testing /users route', function (t) {
  server.inject({method: 'GET', url: '/users'}, function (response) {
    t.equal(response.statusCode, 200);
    server.stop();
    t.end();
  });
});

test('testing /incr route', function (t) {
  server.inject({method: 'GET', url: '/incr'}, function (response) {
    t.equal(response.statusCode, 200);
    server.stop();
    t.end();
  });
});
