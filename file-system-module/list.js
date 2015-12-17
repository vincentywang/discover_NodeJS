/**
 * file system module have function for both synac and aync situation
 */

var fs = require("fs");

// below is sync function
var files = fs.readdirSync("./lib");

// below is async function
fs.readdir('./lib', function(err, files) {
	if (err) {
		throw err;
	}
	console.log(files);
});

console.log("Reading Files ...");