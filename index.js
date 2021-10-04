const http = require('http')
const hostname = '127.0.0.1';
const fs = require('fs')
const port = 8000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(port, hostname, () => {
  console.log(`Server Running at http://${hostname}:${port}/`);
});
