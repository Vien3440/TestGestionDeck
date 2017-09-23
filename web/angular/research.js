$app = angular.module('app', []);


// Research on api

$app.controller('appController', function ($scope, $http) {

  $path = "https://mdmagic.herokuapp.com";
  // $path = "http://localhost:5000";

    $scope.valueInput = function valueInput() {

        $http({
            method: 'GET',
            url: 'https://api.magicthegathering.io/v1/cards?name=' + $scope.titre + "&language=french"
        }).then(function successCallback(response) {
            $listCards = response.data.cards;

            $scope.editListe($listCards);

        }, function errorCallback(response) {
            alert('error :(');
        });

    };

// Editing the view list
    $scope.editListe = function editListe($listCards) {

        $arrayNames = [];

        angular.forEach($listCards, function (value, key) {

            /*Recherche Fr */
            angular.forEach(value.foreignNames, function (value, key) {
                boolImg = value.hasOwnProperty('imageUrl');
                /*Checking card image*/
                if (value.language === "French" && boolImg === true) {  /* "Future"  Replace the string language with a variable */

                    localName = value.name;
                    localImg = value.imageUrl;

                    $arrayNames.push({
                        'name': localName,
                        'imgid': localImg
                    });
                }
            });
        });

        $scope.cards = $arrayNames;
    };

///Session ////

 $scope.createDeckSession = function createDeckSession() {
       
        $http({
            method: 'GET',
            url: $path + "/create/decksession"
        })

                .then(function (response) {

                   

                }, function (response) {

                });
    };

    $scope.addCarteDeckSession = function addCarteDeckSession() {



        this.card.nbr = 1;
        $http({
            method: 'POST',
            url: '/add/deckSession/carte',
            data: $.param(this.card),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then(function successCallback(response) {
         
            
             $scope.cardsDeck = [];
//           test = $scope.cardsDeck;
  $scope.cardsDeck = response.data ;
        }, function errorCallback(response) {
             
        });

    };


  $scope.getDeckSession = function getDeckSession() {

        $http({
            method: 'GET',
            url: "/get/decksession"
        })
                .then(function (response) {
                  

                    $scope.cardsDeck = response.data;

//                alert($scope.$content);
                }, function (response) {
                    //error

                });
    };

   
/**Creat views for pdf**/


});
