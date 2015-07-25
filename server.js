var http = require('http');
var fs = require('fs');

var httpHandler = function(request, response) {
    if(request.url === '/time.json') {
        response.writeHead(200, {"Content-Type": "application/json"});
        var currentHour = new Date().getHours();
        var time = currentHour > 6 && currentHour < 20 ? 'day' : 'night';
        response.end('{"time": "' + time + '"}');
    } else if(request.url === '/') {
        fs.readFile(__dirname + '/index.html', function(err, data) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        });
    } else if(request.url === '/client.js') {
        fs.readFile(__dirname + '/client.js', function(err, data) {
            response.writeHead(200, {"Content-Type": "application/javascript"});
            response.end(data);
        });
    }
}

http.createServer(httpHandler).listen(3000);

console.log('listen on 3000 port ...');

exports.httpHandler = httpHandler;