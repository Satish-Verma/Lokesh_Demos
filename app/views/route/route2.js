angular.module('APP', ['ngRoute']).
        config(function ($routeProvider) {
            $routeProvider.
                    when('/', {templateUrl: 'partials/directory.html'}).
                    when('/view/:id', {templateUrl: 'partials/view.html', controller: 'viewController'}).
                    otherwise({redirectTo: '/'})
        }).
        controller('directoryController', ['$scope', '$http', function ($scope, $http) {
                $http.get('http://localhost:8383/MyFirstAngular/app/views/route/data.js').then(function (data) {
                    $scope.people = data.data;
                });
            }]).
        controller('viewController', ['$scope', '$routeParams', function ($scope, $routeParams) {
                $scope.person = $scope.people[$routeParams.id]
            }]);


