var Transform = require('stream').Transform;

var uppercase = new Transform({decodeStrings: false});

uppercase._transform = function(chunk, encoding, done) {
  done(null, chunk.toUpperCase());
};

// Transform stream is created
// Now use it:

var fs = require('fs');
var source = fs.createReadStream(__filename, {encoding: 'utf8'});
var target = fs.createWriteStream('uppercased.js');
source.pipe(uppercase).pipe(target);