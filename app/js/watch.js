/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myAppModule = angular.module('myApp', []);

myAppModule.controller('CartController',
        function ($scope) {
            $scope.bill = {};
            $scope.items = [
                {title: 'Candies(s)', quantity: 8, price: 0.25},
                {title: 'Chocolate(s)', quantity: 17, price: 1.25},
                {title: 'Toffee(s)', quantity: 5, price: 0.2}
            ];

            $scope.totalCart = function () {
                var total = 0;
                for (var index = 0, len = $scope.items.length; index < len; ++index) {
                    total += $scope.items[index].price * $scope.items[index].quantity;
                }

                return total;
            };

            $scope.subtotal = function () {
                return $scope.totalCart() - $scope.bill.discount;
            };

            var calculateDiscount = function (newvalue, oldValue, scope) {
                $scope.bill.discount = newvalue > 100 ? 10 : 0;
            };

            $scope.$watch($scope.totalCart, calculateDiscount);
        });
