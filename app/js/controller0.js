var app = angular.module('myApp', ['ngSanitize']);
app.controller('myController', myController);
app.value("valueName", {myVal: "myVal"});
app.filter("myFilter", function() {
    return function(name) {
        return "Mr. " + name;
    }
});

function myController($scope, $interval, $timeout, $window){
    var counter = 0;
    $scope.myObje = {};
        $scope.myObje.key2  =  "new Value";
        $scope.greetings2 = "Hello";
        $scope.world = "world";
        $scope.myobj = {key1: 'value for key 1',
                        key2 : "Old Value"};
        
        $scope.onChange = function() {
            $scope.counter++;
        }
        $scope.addData = function() {
            angular.merge($scope.myobj, $scope.myObje);
            $scope.myObje.anotherMember = "another member";
        };
        
        
        
}
