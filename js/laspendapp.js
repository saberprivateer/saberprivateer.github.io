'use strict';

var laspendApp = angular.module('laspendApp', [
    'ngRoute',
    'ngMaterial',

]);

laspendApp.controller('laspendCtrl', function($scope, $http){
//$http.get('https://controllerdata.lacity.org/resource/checkbook.json?calendar_month_year=SEPTEMBER,2015').success(function(data) {
$http.get('js/test.json').success(function(data) {
    console.log('success: ' + data.length);

$scope.checkbook = data;
    });

    $scope.convertToInt= function (value) {
                return parseInt(value,10);
            };
})
