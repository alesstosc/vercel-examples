var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.JS! il server funziona nella porta: '+process.env.PORT);
}).listen(process.env.PORT);
console.log('Server running '+process.env.PORT);
