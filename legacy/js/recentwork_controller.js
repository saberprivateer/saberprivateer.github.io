var recentworkApp = angular.module('recentworkApp', []);

recentworkApp.controller('RecentWorkCtrl', function ($scope) {
  $scope.recentworks = [

    {'website': 'http://www.slideshare.net/DanielKamerling/product-management-personas-data',
     'caption': 'Presentation: Personas & Data',
     'image': 'img/landing/personas_data.png',
     'type': 'Presentation',
     'display_order': '1',
     'display':'TRUE'
      },
      {'website': 'https://medium.com/product-labs/two-subtle-influencers-in-product-design-36489a6eb3ea',
          'caption': 'Article: Influencers in Product Design',
           'image': 'img/landing/whispers.jpeg',
           'type': 'Article',
           'display_order': '2',
           'display':'TRUE'
      },
      {'website': 'http://na.leagueoflegends.com/en/news/store/store-update/end-game-gifting-here',
          'caption': 'Feature: Mystery Gifting',
          'image': 'img/landing/mystery_gifting.jpg',
          'type': 'Feature Announcement',
          'display_order': '3',
          'display':'TRUE'
      },
      {'website': 'http://www-935.ibm.com/services/us/gbs/thoughtleadership/software-defined-supply-chain/',
          'caption': 'Paper: Software Defined Supply Chain',
          'image': 'img/landing/IBM_IBV_snip.PNG',
          'type': 'White Paper',
          'display_order': '4',
          'display':'TRUE'
      },
  ];

  $scope.orderProp = 'display_order';
});