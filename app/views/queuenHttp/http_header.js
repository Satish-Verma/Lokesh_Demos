var app = angular.module('myApp', []);
app.controller('myController', myController);

function myController($scope, $q, $http) {
    $scope.sendRequest = function () {
        $http.get(
            'http://localhost:8383/MyFirstAngular/app/views/queueNHttp/getData.js',
        {
            header: {
                'Authorization': 'Basic AEhgtptxz=ap'
            }
        }).then(function(response) {
            $scope.myVal = response.data;
        }, function(errorMsg) {
            $scope.myVal = errorMsg.message;
        });
    }
}
