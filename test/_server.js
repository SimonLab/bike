var test = require('tape');
var cheerio = require('cheerio');
var server = require('../api/server.js');

test('testing / route', function (t) {
  server.inject({method: 'GET', url: '/'}, function (response) {
    t.equal(response.statusCode, 200);
    server.stop();
    t.end();
  });
});
