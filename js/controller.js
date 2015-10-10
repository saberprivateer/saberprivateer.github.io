var workhistApp = angular.module('workhistApp', []);

workhistApp.controller('WorkHistCtrl', function ($scope) {
  $scope.jobs = [

    {'website': 'pivotal.io/labs',
     'logo': 'img/pivotallabs.jpg',
     'title': 'Senior Product Manager',
     'description':'Responsible for executing product design through Discovery & Framing and software development using extreme programming methodology (weekly iterations, pair programming) in a client facing role. Also responsible for enablement and training of clients to build up product capabilities. Industries range from live music entertainment to mortgage lending.',
     'year': 2015},

    {'website': 'harris.com',
     'logo': 'img/harris.png',
     'title': 'Mechanical Engineer 2',
     'description':'Performed project management duties of +$200k project including supplier selection and oversight, scheduling, managing customer relationship, and leading teams across three different locations.',
     'year': 2004
     },

    {'website': 'riotgames.com',
     'logo': 'img/riotgames.jpg',
     'title': 'Product Manager',
     'description':'Product Manager for the 10+ member store team where I work in conjunction with eCommerce, design, and developers to insure players feel good about their purchase experience with robust service availability. Responsible for developing a product vision and roadmap, maintaining a well groomed backlog, and supporting the development process in Agile/Kanban.',
     'year': 2013},

     {'website': 'ibm.com',
     'logo': 'img/ibm_logo.jpg',
     'title': 'Managing Consultant',
     'description':'Responsible for defining scope, gathering requirements, performing complex quantitative analysis, programming models, and working side-by-side with the client to form business, marketing, and operations strategy.  Also experienced with program management including issue tracking, risk analysis, budget and schedule planning.',
     'year': 2011},

     {'website': 'sysplan.com',
     'logo': 'img/SPC_logo.png',
     'title': 'Research Engineer',
     'description':'Identified investment opportunities (~$200k-$5M) and managed progress of disruptive technology initiatives for Defense Advance Research Projects Agency (DARPA).  Example technologies include unmanned air vehicles (UAV), unmanned underwater vehicles (UUV), mesoscale oscillators, and high-frequency analog communications.',
     'year': 2008}
  ];

  $scope.orderProp = 'year';
});