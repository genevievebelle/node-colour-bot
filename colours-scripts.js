var xhr = require('xhr')
var dom = require('domquery')

function getTheme (callback) {
  xhr("/colour", function (err, res) {
    callback(err, JSON.parse(res.body))
  })
}

function changeColour (colour) {
  dom('body').style('background-color', colour)
  dom('.change').on('click', function (ev) {
    getTheme(function (err, theme) {
      if (!err) changeColour(theme.hexcode)
    })
  })
}


getTheme(function (err, theme) {
  if (!err) changeColour(theme.hexcode)
    console.log(theme)
})
