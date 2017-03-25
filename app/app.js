
// Building a Webites with Nodejs and expressjs
// using nodejs features with in express
// accessing data

var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 4000);
// setting dataFile into appData  in order to call it in js files
app.set('appData', dataFile);

// require js files
app.use(require('./routes/index'));
app.use(require('./routes/directory'));



// createServer
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
