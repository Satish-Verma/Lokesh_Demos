var app = angular.module('myApp', []);
app.controller('myController', myController);

function myController($scope, $q, $http, $httpProvider) {
    $scope.sendRequest = function () {
        $http.get(
            'http://localhost:8383/MyFirstAngular/app/views/queueNHttp/getData.js'
        ).then(function(response) {
            $scope.myVal = response.data;
        }, function(errorMsg) {
            $scope.myVal = errorMsg.message;
        });
    }
}
