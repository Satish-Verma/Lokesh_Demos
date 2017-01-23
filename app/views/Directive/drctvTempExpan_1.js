var app = angular.module('myApp', []);
app.controller('myController', myController);
app.directive('custInfo', custInfo);

function myController($scope){
    $scope.customer = {
        name: 'Buddha Deb',
        address: 'West Bengal'
  };
}

function custInfo() {
    return {
        templateUrl: 'app/partials/customerInfo.html'
    };
}
