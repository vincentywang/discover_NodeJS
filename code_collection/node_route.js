
/*
    |--------------------------------------------------------------------------
    | simulate routing logics only with PATH
    |--------------------------------------------------------------------------
    |
    | 1. create route object maintain a routes store to save request events and handler functions
    | 2. create a requestListener which is a function automatically added to the 'request' event
    | 3. create request event and register handler to the event
    |
    */
var http = require("http");
var url = require("url");
var route = {
  routes : {},
  for: function(path, handler){
     this.routes[path] = handler;
  }
};

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");
  if(typeof route.routes[pathname] ==='function'){
    // route.routes[pathname] is the handler associated with the pathname
    route.routes[pathname](request, response);
  }else{
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("404 Not Found");
  }
}

route.for("/start", function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello");
  response.end();
});

route.for("/finish", function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Goodbye");
  response.end();
});

// + + + follow above pattern to add more request event


// onRequest is a requestListener 
http.createServer(onRequest).listen(9999);
console.log("Server has started.");


/**
 * route logic with path and method
 */ 
var http = require("http");
var url = require("url");
var route = {
  routes : {},
  for: function(method, path, handler){
   this.routes[method + path] = handler;
  }
};

route.for("GET", "/start", function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello");
  response.end();
});

route.for("GET", "/finish", function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Goodbye");
  response.end();
});

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + request.method + pathname + " received.");

  if(typeof(route.routes[request.method + pathname])==='function'){
    route.routes[request.method + pathname](request, response);
  }else{
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("404 Not Found");
  }
}

http.createServer(onRequest).listen(9999);
console.log("Server has started.");
