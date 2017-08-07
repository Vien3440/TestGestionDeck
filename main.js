
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
//  Pour servir des fichiers statiques
  app.use(express.static('web'));
  // affiche la vue  
  res.sendFile(__dirname +'/views/home.html');
  
});

app.listen(8000, function () {
});