'use strict';

var dhkApp = angular.module('dhkApp', [
    'ngRoute',
    'workhistApp',
    'ngMaterial',
    'eduhistApp',
    'recentworkApp',
    'mm.foundation'
]);

dhkApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'RecentWorkCtrl'
            }).
            when('/career', {
                templateUrl: 'partials/career.html',
                controller: 'WorkHistCtrl'
            }).
            when('/education', {
                templateUrl: 'partials/education.html',
                controller: 'EduHistCtrl'
            }).
            when('/tastingroom', {
            tempalteUrl: 'partials/tastingroom.html',
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);