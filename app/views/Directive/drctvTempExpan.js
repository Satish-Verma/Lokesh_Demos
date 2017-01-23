var app = angular.module('myApp', []);
app.controller('myController', myController);
app.directive('custInfo', custInfo);

function myController($scope){
    $scope.customer = {
        name: 'Ramgulam',
        address: 'Fiji'
  };
}

function custInfo() {
    return {
        template: '<b>Name:</b> {{customer.name}} <br><br><b>Address:</b> {{customer.address}}'
    };
}
