angular.module('myApp', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
  $scope.igor = { name: 'Igor', address: '123 Somewhere' };
  $scope.myVal = "This is my value";
}])
.directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info',
      myAttr:'@'
    },
    template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}} <br> {{myAttr}}'
  };
});
