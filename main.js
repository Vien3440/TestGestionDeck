
var express = require('express');
var app = express();
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({extended: false});


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))






        .get('/create/session/deck', function (req, res) {
            /* S'il n'y a pas de deckList dans la session,
             on en crée une vide sous forme d'array */

            if (typeof (req.session.deckList) == 'undefined') {
                req.session.deckList = [];
                res.send(req.session.deckList);
            }

            
        })

        /* On ajoute une catre à la list */
        .get('/session/newDeck/ajouter/carte', function (req, res) {

            req.session.deckList.push('pikatchu');

            res.redirect('/');
        })



        .get('/session/Deck/supr', function (req, res) {
            delete req.session.deckList;

            res.redirect('/');
        })
        
         .get('/cheeck/session', function (req, res) {
           if (typeof (req.session.deckList) == 'undefined') {
               res.send('sessionOff')
                
            }else{ res.send('sessionOn')}
            
           
        });
        
        
        
app.get('/', function (req, res) {
    console.log(req.session.deckList);
//  Pour servir des fichiers statiques
    app.use(express.static('web'));
    // affiche la vue  
    res.sendFile(__dirname + '/views/home.html');

});

app.listen(8000, function () {
});