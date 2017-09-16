
var express = require('express');
var app = express();
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({extended: false});


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))






        .get('/create/decksession', function (req, res) {
            /* S'il n'y a pas de deckList dans la session,
             on en crée une vide sous forme d'array */

            if (typeof (req.session.deckList) == 'undefined') {
                req.session.deckList = [];
                res.send(req.session.deckList);
            }

            
        })

        /* On ajoute une catre à la list */
        .post('/add/deckSession/carte', function (req, res) {
           nameCarte = req.query.name ;
           imgCarte = req.query.img ;
           nbrCarte = req.query.nbr ;
           console.log(nbrCarte+imgCarte+nameCarte);
            req.session.deckList.push('pikatchu');
           res.send('sessionOn');
        })



        .get('/remove/deckSession', function (req, res) {
            delete req.session.deckList;

            res.redirect('/');
        })
        
        
        
        
         .get('/cheeck/deckSession', function (req, res) {
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

app.listen(process.env.PORT || 5000) ;

