'use strict';

var choiceApp = angular.module('choiceApp', ['ngMaterial','ngSanitize'])
    .run(function($log){
        $log.debug("MyApp is ready!");
        })
    .config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

choiceApp.controller('ChoiceCtrl', function($scope, $http){

      google.charts.load('current', {'packages':['corechart']});


var req = {
method: 'GET',
    url: 'http://cors.io/?u=http://www.realclearpolitics.com/epolls/json/5949_historical.js',
//url: 'http://elections.huffingtonpost.com/pollster/api/polls.json?topic=2016-president&page=30',
};

$http(req,{cache: true}).success(function(data){
console.log('success: '+data.length);
data = data.substr(12);
data = data.substr(0,data.length-2);
//console.log(data);
$scope.rcpaverage = JSON.parse(data);
$scope.rcpaveragedate = $scope.rcpaverage['poll'].rcp_avg[0].date.substr(0,16);
console.log('date= '+$scope.rcpaveragedate);
console.log($scope.rcpaverage['poll']);
$scope.clinton = $scope.rcpaverage['poll'].rcp_avg[0].candidate[0].value;
//clinton = clinton.candidate[0];
//console.log('clinton= '+clinton);

google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var candidates=[];
        var i;
        for (i=0;i<3;i++){
        candidates[i]=Number($scope.rcpaverage['poll'].rcp_avg[0].candidate[i].value);
        }
        console.log('candidates= '+candidates);
        var data = google.visualization.arrayToDataTable([
          ['Candidate', 'Polling'],
          ['Clinton', candidates[0]],
          ['Trump', candidates[1]],
          ['Johnson', candidates[2]],
          ['Other', 100-candidates[0]-candidates[1]-candidates[2]]
        ]);

        var options = {
          pieHole: 0.4,
         // width: 270,
          //height: 250,
          tooltip: {
          text: 'percentage'},
          chartArea: {
          //top: 5,
          height: '100%'
          },
          //title: 'RCP Average '+ $scope.rcpaveragedate,
          pieSliceTextStyle: {
            color: 'white'
          },
          legend: {
          position: 'right'
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }
});

//    $scope.pollsters =
     $http.get('../app/src/pollsters.json').then(function(response) {
           $scope.pollsters = response.data;
//           console.log($scope.rcppolls);
          });

$scope.pollIcon = function(condition) {
return condition ? "check_circle" : "cancel";
  }
$scope.pollIconColor = function(condition) {
return condition ? "green" : "red";
  }

$scope.pollIconType = function(condition) {
if (condition == 'School')
{return "school";}
if (condition == 'University'){return "school";}
if (condition == 'Media'){return "tv"; }
if (condition == 'Vendor'){return "poll";}
if (condition == 'Non-Profit'){return "account_balance";}
else {return "";}
}

$scope.header = function(filter) {
if (filter == 'Mainstream'){
//$scope.pollsterFilterSet('f');
console.log("mainstream was called");
$scope.headerText = 'Mainstream polling organizations as seen on <a target="_blank" href="http://www.realclearpolitics.com/epolls/2016/president/us/general_election_trump_vs_clinton-5491.html">RealClearPolitics</a>';
}
if (filter == 'All'){
$scope.headerText = 'All major polling organizations that rate A- or better on <a href="http://projects.fivethirtyeight.com/pollster-ratings/" target="_blank">FiveThirtyEight</a>';
//$scope.pollsterFilterSet('all');
console.log("all was called");
}
if (filter == 'Inclusive'){
console.log("inclusive was called");
//$scope.pollsterFilterSet('t');
$scope.headerText = 'All major polling organizations that rate A- or better on <a href="http://projects.fivethirtyeight.com/pollster-ratings/" target="_blank">FiveThirtyEight</a> and/or have included Gary Johnson in a poll since his nomination';
}
if (filter == 'Exclusive'){
//$scope.pollsterFilterSet('f');
$scope.headerText = 'All major polling organizations that rate A- or better on <a href="http://projects.fivethirtyeight.com/pollster-ratings/" target="_blank">FiveThirtyEight</a> and have NOT included Gary Johnson in a poll since his nomination';
}
}

/*$scope.pollsterFilterSet = function(item){
if (item == 't'){ $scope.pollsterFilter = true};
if (item == 'f'){$scope.pollsterFilter = false};;
if (item == 'all'){$scope.pollsterFilter = '';}
}

$scope.pollsterFilter = '';*/
$scope.headerText='';

//$scope.rccppolls=[];
 $http.get('../app/src/polls.json').then(function(response) {
       $scope.rcppolls = response.data;
       console.log($scope.rcppolls);
      });


$scope.toggle = function(flip){
flip=!flip;
return flip;
}

var reqpolls = {
method: 'GET',
url: 'http://cors.io/?u=http://www.realclearpolitics.com/poll/race/5949/polling_data.json',
};
$http(reqpolls,{cache: true}).success(function(data){
//console.log('reqpolls: '+data.poll[1].id);
$scope.rcpscrape = data.poll;
console.log('scrape= '+$scope.rcpscrape);
});

});



//$scope.services.push.apply($scope.services, data.services);