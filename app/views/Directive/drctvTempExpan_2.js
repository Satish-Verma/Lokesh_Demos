var app = angular.module('myApp', []);
app.controller('myController', myController);
app.directive('custInfo', custInfo);

function myController($scope){
    $scope.customer = {
        name: 'Jihyouk Lee',
        address: 'S. Korea'
  };
}

function custInfo() {
    return {
        templateUrl: function (elem, attr) {
            return 'app/partials/customer-name.html';
        }
    };
}
