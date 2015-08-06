
function incr (request, reply) {
  //incr in redis
  //get the new value of redis
  //retun this value
  reply("incr");
}

module.exports = {
  incr: incr
};
