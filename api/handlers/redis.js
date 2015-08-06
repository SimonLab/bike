var redis = require('redis');
var url = require('url');
var redisURL = url.parse(process.env.REDISCLOUD_URL);

function incr (request, reply) {
  var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
  client.auth(redisURL.auth.split(":")[1]);
  client.incr("ind", function(err, result) {
    reply(result);
    client.quit();
  });
}

module.exports = {
  incr: incr
};
