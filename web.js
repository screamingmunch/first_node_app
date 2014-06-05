var express = require("express");
var logfmt = require("logfmt");
var app = express();

// parses and generates log lines in logfmt style
app.use(logfmt.requestLogger()); 


app.get('/', function(request, response) {
  response.send("Hello Dawg");
});


//Foreman defaults $port env var @ port 5000
var port = Number(process.env.PORT || 5000); 
app.listen(port, function(){
  console.log("listening on port " + port);
});

// var server = http.createServer(app);
// var port = process.env.PORT || 5000;
// server.listen(port, function(){
//   console.log("listening on port" + port);
// });