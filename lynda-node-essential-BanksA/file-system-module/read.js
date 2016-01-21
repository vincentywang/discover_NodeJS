var fs = require("fs");

// below is sync function to read file
var contens = fs.readFileSync("/lib/saying.md", "UTF-8"); // send text encoding 

// below is async function to read file
fs.readFile("./lib/saying.md", "UTF-8", function(err, contents) {
	if (err) {
		console.log(err);
	}
	console.log(contents);
});

