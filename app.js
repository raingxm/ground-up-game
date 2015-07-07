var http = require('http');
var fs = require('fs');

var httpHandler = function(request, response) {
    if(request.url == '/') {
        response.writeHead(200, {"Content-Type": "application/json"});
        var currentHour = new Date().getHours();
        var time = currentHour > 6 && currentHour < 20 ? 'day' : 'night';
        response.end('{"time": "' + time + '"}');
    }
}

http.createServer(httpHandler).listen(3000);

console.log('listen on 3000 port ...');