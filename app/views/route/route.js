var app = angular.module('myApp', ['ngRoute']);
app.config(addRoutes);
app.controller('myController', myController);
app.controller('partial1Ctrl', partial1Ctrl);

function addRoutes($routeProvider) {
    $routeProvider.when('/partial', {
        templateUrl: 'partial1.html',
        view:"1"
//        controller: 'pratial1Ctrl'
    });
}

function myController($scope, $q, $http) {
    $scope.myVal = "some default Value";
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

function partial1Ctrl($scope) {
    
}

