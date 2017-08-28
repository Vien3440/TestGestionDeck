$app = angular.module('app');

$app.controller('deckSession', function ($scope, $https) {

    $path = "https://localhost:5000";

    $scope.cheeckDeckSession = function cheeckDeckSession() {

        $http({
            method: 'GET',
            url: $path + "/cheeck/session"
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
            url: $path + "/create/session/deck"
        })

                .then(function (response) {
                  
            $scope.cheeckDeckSession();
                   
                }, function (response) {
         
                });
    };
});
