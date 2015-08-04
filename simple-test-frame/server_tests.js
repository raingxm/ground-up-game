var test = require("./test");
var http = require("http");
var httpHandler = require("../server").httpHandler;

test("should send back index.html when request '/'", function(done) {
    http.ServerResponse.prototype.end = function(data) {
        test.isEqual(data.toString().substr(0, 9), "<!DOCTYPE");
        done();
    };

    httpHandler({url: "/"}, new http.ServerResponse({}));
},
    "should send back client.js when request '/client.js'", function(done) {
        http.ServerResponse.prototype.end = function(data) {
            test.isEqual(data.toString().substr(0, 10), ';(function');
            done();
        };
        httpHandler({url: "/client.js"}, new http.ServerResponse({}));
    }
);