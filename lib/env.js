var fs      = require('fs');
var Path    = require('path');
var envfile = Path.join(__dirname, '/../env.json');
try {
    var env = require(Path.join(__dirname, '../env.json'));
    var keys = Object.keys(env);
    keys.map(function(k) {
      /* istanbul ignore else */
      if(!process.env[k]) {
        process.env[k] = env[k];
      }
    });
}
catch (e) {
  var msg = 'Please create a env.json file to create your environment variables';
  console.log(msg, e);
}
