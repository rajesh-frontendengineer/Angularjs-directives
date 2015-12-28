/*AMD*/

require.config({
    baseUrl:"",
    waitSeconds:200,
    paths:{
        'angular':'node_modules/angular/angular',
        'jquery':'node_modules/jquery/dist/jquery',
        'main-external':'main',
        'main-module':'module'
    },
    shim:{
        'angular':{
            deps:['jquery'],
            exports:'angular'
        }
    },
    deps:['angular']
});

require(['angular','main-module'], function(angular) {
    console.log('main-module');
        //'use strict';
        //
        //var appshell = angular.module('appshell', []);
        //
        //angular.module('appshell').controller('mainCtrl', function ($scope) {
        //    $scope.name = "test-app";
        //});
        //return appshell;

});