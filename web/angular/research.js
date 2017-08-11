           $app = angular.module('app', []);
           
                    $app.controller('form', function ($scope, $http) {



                        $scope.valueInput = function valueInput (){
//                            alert($scope.titre);
// $scope.cheeckSession();
                            $http({
                                method: 'GET',
                                url: 'http://api.magicthegathering.io/v1/cards?name=' + $scope.titre
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

                                $flag = true;
                                $nameCheck = value.name;
                                angular.forEach($arrayNames, function (value, key) {
                                    if (value.name === $nameCheck) {
                                        $flag = false;
                                    }

                                });
                                if ($flag === true) {
                                    $arrayNames.push({
                                        'name': value.name,
                                        'imgid': value.multiverseid
                                    });
                                }


                            });

                            $scope.cards = $arrayNames;

                        };


                    });
