$app = angular.module('app');

$app.controller('deckSession', function ($scope, $http) {

   //  $path = "https://mdmagic.herokuapp.com";
   $path = "http://localhost:5000";

    $scope.cheeckDeckSession = function cheeckDeckSession() {

        $http({
            method: 'GET',
            url: $path + "/cheeck/decksession"
        })
                .then(function (response) {
                    // success
                    
                    $scope.$content = response.data;

//                alert($scope.$content);
                }, function (response) {
                    //error
                  
                });
    };

    $scope.createDeckSession = function createDeckSession() {
  $scope.cheeckDeckSession();
        $http({
            method: 'GET',
            url: $path + "/create/decksession"
        })

                .then(function (response) {
                  
            $scope.cheeckDeckSession();
                   
                }, function (response) {
         
                });
    };
    

});

