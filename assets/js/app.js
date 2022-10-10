let http = require('http')
let fs = require('fs')

let server = http.createServer(handleServer)

function handleServer(req, res) {
  // console.log(req.method)
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream('../../Application/index.html').pipe(res)
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream('../../Application/about.html').pipe(res)
  } else if (req.method === 'GET' && req.url === '/contact') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream('../../Application/contact.html').pipe(res)
  } else if (req.method === 'GET' && req.url === '/services') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream('../../Application/services.html').pipe(res)
  } 
}

server.listen(5000, () => {
  console.log(' listing port num 5000')
})
