
// Building a Webites with Nodejs and expressjs
// using nodejs features with in express
// accessing data

var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 4000);

app.get('/', function(req, res) {
  var info = '';
  dataFile.directory.forEach(function(item) {
      info += `
      <li>
        <h2>${item.first_name}</h2>
        <p>${item.para}</p>
        <img src="${item.img}"></img>

      </li>

      `;

  })
  res.send(`
    <h1> Web Studio Place</h1>
    ${info}
    `);
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
