
var express = require('express');
var app = express();
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({extended: false});

/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}));
app.use(bodyParser.urlencoded({ extended: false }));


        /* On ajoute une catre à la list */
        app.post('/add/deckSession/carte', function (req, res) {
//           nameCarte = req.query.name ;
//           imgCarte = req.query.img ;
//           nbrCarte = req.query.nbr ;
      
      
	
        req.session.deckList.push(req.body);
	
        console.log(req.body);
  
        res.send(req.session.deckList);
      
        });



        app.get('/create/decksession', function (req, res) {
            /* S'il n'y a pas de deckList dans la session,
             on en crée une vide sous forme d'array */

            if (typeof (req.session.deckList) == 'undefined') {
                req.session.deckList = [];
                res.send(req.session.deckList);
            }

            
        });





        app.get('/remove/deckSession', function (req, res) {
            delete req.session.deckList;

            res.redirect('/');
        });
        
        
        
        
      
        
         app.get('/get/deckSession', function (req, res) {
             if(req.session.deckList){
          res.send(req.session.deckList);
      }
        });
        
       
        
        
app.get('/', function (req, res) {
    console.log(req.session.deckList);
//  Pour servir des fichiers statiques
    app.use(express.static('web'));
    // affiche la vue  
    res.sendFile(__dirname + '/views/home.html');

});

app.listen(process.env.PORT || 5000) ;

