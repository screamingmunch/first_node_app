var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(request, response) {
  response.send("Hello Dawg");
});

var port = Number(process.env.PORT || 5000); //Foreman defaults $port env var @ port 5000
app.listen(port, function(){
  console.log("listening on port " + port);
});