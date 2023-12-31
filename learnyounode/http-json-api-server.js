'use strict';
var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var getDate = function (url) {
    var iso = url.query.iso;

    return new Date(iso);
};

var parsetime = function (date) {
    return {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    };
};

var unixtime = function (date) {
    return { unixtime: date.getTime() };
};

const server = http.createServer(function (request, response) {
    var parsedURL = url.parse(request.url, 'true');
    var time = getDate(parsedURL);
    var result;

    switch (parsedURL.pathname) {
        case '/api/parsetime':
            result = parsetime(time);
            break;
        case '/api/unixtime':
            result = unixtime(time);
            break;
    }
    if (result) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.end('\n');
    }
});

server.on('error', function (err) {
    console.error(err);
});

server.listen(port);