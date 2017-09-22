$app = angular.module('app', []);

$app.controller('form', function ($scope, $http) {

//  $path = "https://mdmagic.herokuapp.com";
     $path = "http://localhost:5000";

    $scope.valueInput = function valueInput() {
//                            alert($scope.titre);
// $scope.cheeckSession();
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

    $scope.editListe = function editListe($listCards) {

        $arrayNames = [];

        angular.forEach($listCards, function (value, key) {



            /*Recherche Fr */
            angular.forEach(value.foreignNames, function (value, key) {
                boolImg = value.hasOwnProperty('imageUrl');
                if (value.language === "French" && boolImg === true) {

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


    $scope.addCarteDeckSession = function addCarteDeckSession() {
   
//   alert(this.card.name);
//   alert(this.card.imgid);




 this.card.nbr = 1;
  $http({
  method  : 'POST',
  url     : '/add/deckSession/carte',
  data    : $.param(this.card),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 }).then(function successCallback(response) {
  
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    



//   $scope.$formDeckName = this.card.name;
//   $scope.$formDeckImgid = this.card.imgid;
//            <input type="text" name="name" id="formDeckName">
//            <input type="text" name="img" id="formDeckImg">
//            <input type="number" name="nbr" id="formDeckNbr">
   
   
    
    };


});
