var app = angular.module('myApp', []);
app.controller('myController', myController);

function myController($scope, $q, $http) {
    $scope.sendRequest = function () {
        var promise = $http({
            method: 'GET',
            url: 'http://localhost:8383/MyFirstAngular/app/views/queueNHttp/getData.js'
        });
        
        promise.then(function(response) {
            $scope.myVal = response.data;
        }, function(errorMsg) {
            $scope.myVal = errorMsg.message;
        });
    }
}
