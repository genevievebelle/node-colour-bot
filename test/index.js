var request = require("request");
var test = require('tape');

test("GET /colour", function(t) {
  var url = "http://localhost:4000/colour"

  request.get(url, function(error, response, body) {
    t.plan(2)

    t.equal(response.statusCode, 200, 'is a success');
    t.equal(typeof JSON.parse(body).hexcode, 'string', 'responds with a hexcode string')

    t.end()
  });

});
