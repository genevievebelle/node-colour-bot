var http = require('http')
var randomColor = require('randomcolor')
var getImage = require('./get-image')

function handler (req, res) {
  getImage(function (err, image) {
    res.end(JSON.stringify({
      hexcode: randomColor(),
      image: image,
    }, null, 2))
  })
}
module.exports = handler
if (!module.parent) {
  http.createServer(handler).listen(5000)
}
