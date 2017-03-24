var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 4000);

app.get('/', function(req, res) {
  res.send('<h1> Web Studio Place</h1>');
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port 4000');
});








// var http = require('http');
//
// var myServer = http.createServer(function (request, response)
//  {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Web Studio</h1>');
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('listening on port:3000');
//
//
