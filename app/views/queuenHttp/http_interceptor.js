var app = angular.module('myApp', []);
app.controller('myController', myController);
app.config(function($provide, $httpProvider) {
//$provide.factory('myHttpInterceptor', );

function myInterceptor($q) {
  return {
    'request': function(config) {
        //your code here.
      return config;
    },

   'requestError': function(rejection) {
      if (canRecover(rejection)) {
        return 'recoverable';
      }
      return $q.reject(rejection);
    },
    
    
    'response': function(response) {
      return response;
    },
   'responseError': function(rejection) {
      if (canRecover(rejection)) {
        return 'recoverable';
      }
      return $q.reject(rejection);
    }
  };
}
$httpProvider.interceptors.push(myInterceptor);
});


function myController($scope, $q, $http) {
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
