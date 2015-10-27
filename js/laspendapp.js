'use strict';
      getData();
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

$scope.chartinput = {
charttype: 'Activity',
month: 'SEPTEMBER'
};

$scope.rollups = ('Fund Expenditure Activity Department Vendor').split(' ').map(function(rollup) {
        return {charttype: rollup};
      });

$scope.months = ('JANUARY FEBRUARY MARCH APRIL MAY JUNE JULY AUGUST SEPTEMBER OCTOBER NOVEMBER DECEMBER').split(' ').map(function(month) {
        return {date_month: month};
      });

$scope.newdata = function(){
redraw();
}

function redraw(){
      getData($scope.chartinput.charttype);
      console.log("Start drawBasic");
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Activity');
      data.addColumn('number', 'Dollars');
      var i;
      var name;
      var val;
      var len = Object.keys(d3transform).length;
      console.log("for loop "+$scope.chartinput.charttype);
      for (i=0;i<len;i++){
      name = d3transform[i].key;
            val = d3transform[i].values;
      if($scope.chartinput.charttype==="Vendor"){
      if(val > 10000){
      data.addRows([[name, val]]);
      }}
      else{
      data.addRows([[name, val]]);
      }
      };

      var title = $scope.chartinput.charttype;

      var options = {
        title: 'Los Angeles Comptroller Data',
        chartArea: {width: '70%'},
        hAxis: {
          title: 'Dollars Spent',
          minValue: 0
        },
        vAxis: {
          title: title
        },
        width: 1020,
        height: len*20,
              animation:{
              startup: true,
                duration: 1000,
                easing: 'out',
                }
      };

var optionspie = {
        title: 'Los Angeles Comptroller Data',
        chartArea: {width: '60%'},
        hAxis: {
          title: 'Dollars Spent',
          minValue: 0
        },
        vAxis: {
          title: title
        },
        //width: 580,
              animation:{
              startup: true,
                duration: 1000,
                easing: 'out',
                }
      };

    var formatter = new google.visualization.NumberFormat(
    {prefix: '$', negativeColor: 'red', negativeParens: true, fractionDigits: 0});
    formatter.format(data, 1); // Apply formatter to second column

      var chart = new google.visualization.BarChart(document.getElementById('chart_bar'));
console.log("draw bar");
      var chartpie = new google.visualization.PieChart(document.getElementById('chart_pie'));

      chart.draw(data, options);
      chartpie.draw(data, optionspie);
      }
        /*
        $scope.$watch(
                          "chartinput.charttype",
                          function handleFooChange( newValue, oldValue ) {
                             console.log("new: "+newValue);
                             redraw();
                          }
                      );
*/
});

    google.load('visualization', '1', {packages: ['corechart']});