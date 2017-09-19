$app = angular.module('app', []);

$app.controller('form', function ($scope, $http) {

 //$path = "https://mdmagic.herokuapp.com";
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
      
        $http({
            method: 'POST',
            url: $path + "/add/deckSession/carte",
            data: {
                name: "xXx",
                img: "xXxImg",
                nbr: "xXxNbr"
            }
        })
                .then(function (response) {

                    alert('ok');

                    $scope.cheeckDeckSession();

                }, function (response) {
 alert('non');
                });
    };


});
