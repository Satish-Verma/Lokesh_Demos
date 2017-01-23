var app = angular.module('myApp', ['ngMock']);
app.controller('myController', myController);

function myController($scope, $q, $http, $httpBackend) {
    $scope.sendRequest = function () {
        $http.get(
            'MyFirstAngular/app/views/queueNHttp/getData'
        ).then(function(response) {
            $scope.myVal = response.data;
        }, function(errorMsg) {
            $scope.myVal = errorMsg.message;
        });
    };
}

app.run(function($httpBackend) {
    $httpBackend.whenGET('MyFirstAngular/app/views/queueNHttp/getData').respond(function() {
        return '{name:"lokesh"}';
    });
});
