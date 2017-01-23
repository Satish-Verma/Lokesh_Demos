var app = angular.module('myApp', []);
app.controller('myController', myController);

function myController($scope, $q) {
    function asyncGreet(name) {
        // perform some asynchronous operation, resolve or reject the promise when appropriate.
        var deferred = $q.defer();
        var counter = 1;
            setTimeout(function () {
                counter++;
                if (okToGreet(name)) {
                    deferred.resolve('Hello, ' + name + '! = ' + counter);
                } else {
                    deferred.reject('Greeting ' + name + ' is not allowed. = ' + counter);
                }
            }, 1000);
            return deferred.promise;
        }
    
    var promise = asyncGreet("Arun");
    promise.then(function (greeting) {
        return asyncGreet(5);
    })            
    .then(function(greeting) {
        return asyncGreet("Samay");
    }).then(function (greeting) {
        $scope.myVal = greeting;
    }, 
    
    function (reason) {
        $scope.myVal = reason;
    });

    function okToGreet(name) {
        return typeof name === 'string';
    }
}
