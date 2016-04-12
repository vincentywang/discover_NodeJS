var https = require("https");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function(res) {
	var responseBody = "";
	console.log("Response from server started.");
	console.log(`Server Status: ${res.statusCode} `);
	console.log("Response Header: %j", res.header);

	res.setEncoding("UTF-8");

	/*
	 * Adds a one time listener function for the event. This listener is invoked only the next time event is triggered, 
	 * after which it is removed.
	 */
	 
	 // this is only for the first time change
	res.once('data', function(chunk) {
		console.log(chunk);
	});

	res.on('data', function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	res.on('end', function() {
		fs.writeFile('george-washington.html', responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("File Downloaded");
		});
	});
});

req.on('error', function(err) {
	console.log(`problem with request: ${err.message}`);
});

req.end();
