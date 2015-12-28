define(['angular'],
    function (angular) {
        'use strict';

        var appshell = angular.module('appshell', []);

        angular.module('appshell').controller('mainCtrl', function ($scope) {
            $scope.name = "test-app";
        });
        console.log("module.js loaded");
        return appshell;
    }
);
