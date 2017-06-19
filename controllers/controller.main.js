angular.module('taskList')

    .controller('mainController', function ($scope, $location) {

        $scope.setRoute = function (route) {
            $location.path(route)
        }
    });