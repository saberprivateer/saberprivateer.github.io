'use strict';

var dhkApp = angular.module('dhkApp', [
    'ngRoute',
    'workhistApp',
    'ngMaterial',
    'eduhistApp',
    'recentworkApp',
    'mm.foundation'
])
.run(['$rootScope', '$location', '$window',
    function($rootScope, $location, $window) {
      $rootScope.$on('$routeChangeSuccess',
        function(event) {
          if (!$window.ga) {
            return;
          }
          $window.ga('send', 'pageview', {
            page: $location.path()
          });
        });
    }
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
//            when('/tastingroom', {
//                tempalteUrl: 'tastingroom.html',
//            }).
//            when('/hackla', {
//                templateUrl: 'plottingLAspending.html'
//            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);