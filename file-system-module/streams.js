var fs = require("fs");

/**
 * Reading File
 */
// fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {
// 	console.log(`File Read ${chatlog.length}`);
// });

// console.log("Reading File");


/**
 * Reading Stream
 */

var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File");
});

stream.on("data", function(chunk) {
	process.stdout.writhe(` chunk: ${chunk.length} |`);
	data += chunk;
});

stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File ${data.length}`);
	console.log("\n\n\n");
	
});