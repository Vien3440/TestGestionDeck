var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres


function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./views/home.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);


