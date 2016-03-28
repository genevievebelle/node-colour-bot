var request = require('request')

function getImage (callback) {
  var url = "https://api.unsplash.com/daily"
  request(url, function (err, res) {
    callback(err, res.body)
  })
}

module.exports = getImage
