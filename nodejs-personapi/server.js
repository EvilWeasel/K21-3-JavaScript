// node-js http-module
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// req => request
// res => response
let server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Client!');
  } else if (req.url == '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>Hello HomePage <3</h1></body></html>');
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
