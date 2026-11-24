const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from CI/CD v2');
}).listen(3000);
