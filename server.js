var http = require('http')
var fs = require('fs')
var customApi = require('./api')
var browserify = require('browserify')

function handler (req, res) {
  if (req.url === "/colour") {
    customApi(req, res)
  } else if (req.url === "/") {
    fs.createReadStream("./colours-index.html").pipe(res)
  } else if (req.url === "/styles.css") {
  fs.createReadStream("./colours-styles.css").pipe(res)
  } else if (req.url === "/scripts.js") {
  browserify("./colours-scripts.js").bundle().pipe(res)
  } else {
    res.writeHead(404, 'not found')
    res.end()
  }
}

http.createServer(handler).listen(4000)
