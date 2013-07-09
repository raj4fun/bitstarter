var express = require('express');
var fs = require('fs');

var sResponse = new Buffer(fs.readFileSync("index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(sResponse.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
