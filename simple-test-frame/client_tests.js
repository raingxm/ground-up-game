var test = require('./test');
var client = require('../client.js');

test("should parse time from server", function() {
    client.get = function(_, callback) {
      callback({target: {responseText: '{ "time": "day"}'}});
    };
    client.getTime(function(time) {
      test.isEqual(time, "day")
    })
  },
  "should draw rect of passed size and color", function() {
    client.renderer.ctx = function() {
      return {
        canvas: {width: 300, height: 150},
        fillRect: function(x, y, w, h) {
          test.isEqual(x, 0);
          test.isEqual(y, 0);
          test.isEqual(w, 300);
          test.isEqual(h, 150);
        }
      }
    };

    client.renderer.fillBackground("blue");
});