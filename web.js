var express = require("express");
var logfmt = require("logfmt");
var http = require('http');
var app = express();
var server = http.createServer(app);

// parses and generates log lines in logfmt style
app.use(logfmt.requestLogger()); 


app.get('/', function(request, response) {
  response.send("Hello Dawg");
});






//Foreman defaults $port env var @ port 5000
var port = Number(process.env.PORT || 5000);
server.listen(port, function(){
//app.listen(port, function(){})  also works, it makes express create an http server for you
//server.listen creates a http server yourself, it's useful when you want to reuse the http server
// for example, to run socket.io within the same http server instance
  console.log("listening on port" + port);
});