'use strict';

var dhkApp = angular.module('dhkApp', [
    'ngRoute',
    'workhistApp',
    'ngMaterial',
    'eduhistApp'
]);

dhkApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/home',{
                        templateUrl: 'partials/home.html',
                    }).
            when('/career',{
                templateUrl: 'partials/career.html',
                controller: 'WorkHistCtrl'
            }).
            when('/education',{
                templateUrl: 'partials/education.html',
                controller: 'EduHistCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
}]);