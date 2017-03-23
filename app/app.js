var http = require('http');

var myServer = http.createServer(function (request, response)
 {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write('<h1>Web Studio</h1>');
  response.end();
});

myServer.listen(3000);
console.log('listening on port:3000');
