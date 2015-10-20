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
      {'website': 'http://www.slideshare.net/DanielKamerling/product-management-personas-data',
           'caption': 'Presentation: Personas & Data',
           'image': 'img/landing/personas_data.png',
           'type': 'Presentation',
           'display_order': '2',
           'display':'TRUE'
            },
            {'website': 'http://www.slideshare.net/DanielKamerling/product-management-personas-data',
                 'caption': 'Presentation: Personas & Data',
                 'image': 'img/landing/personas_data.png',
                 'type': 'Presentation',
                 'display_order': '3'
                  },
                  {'website': 'http://www.slideshare.net/DanielKamerling/product-management-personas-data',
                       'caption': 'Presentation: Personas & Data',
                       'image': 'img/landing/personas_data.png',
                       'type': 'Presentation',
                       'display_order': '4'
                        },
  ];

  $scope.orderProp = 'display_order';
});