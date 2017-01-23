/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);
app.controller('myController', myController);

function myController($scope){
        $scope.greetings = "My First Angular";
        $scope.items = [10, 10, 20, 30, 40];
        $scope.x = "Hello";
        $scope.noRepeat = "No repeat";
        $scope.watchMe = "watch me";
        $scope.myFun = function(item) {
            return item.id;
        };
        $scope.collection = [
            {
                id: 0,
                name: 'Harley'
            },
            {
                id: 0,
                name: 'Hasdf rley'
            },
            {
                id: 1,
                name: 'David'
            },
            {
                id: 2,
                name: 'Son'
            },
            {
                id: 3,
                name: 'Bullet'
            },
            {
                id: 4,
                name: 'Yamaha'
            },
            {
                id: 5,
                name: 'Mini'
            },
        ];
}

