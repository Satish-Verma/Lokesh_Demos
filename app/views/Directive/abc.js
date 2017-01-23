var app = angular.module('myApp', []);
app.controller('myController', myController);

function myController($scope, myService, $timeout, $interval) {
    $scope.myVal = "initial value";
    
    $scope.myClick = myService.sayHello;
    var counter = 0;
    $scope.$watch('myVal', function() {
        counter++;
        $scope.myVal = counter;
    });    
}

