var eduhistApp = angular.module('eduhistApp', []);

eduhistApp.controller('EduHistCtrl', function ($scope) {
  $scope.edus = [

    {'website': 'www.virg inia.edu/',
     'logo': 'img/education/UVA.png',
     'title': 'University of Virginia',
     'major': 'B.S. Mechanical Engineering',
     'minor': 'Electrical Engineering',
     'description':'',
     'year_start': 1999,
     'year_end':'2003',
     'company':'UVA',
     'display_order':2,
     'experience':[{'item':'Developed the product roadmap for the fraud identification product of the leading mortgage lending data company in order to target top tier banking companies to gain significant increase in market share and revenue.'},
     {'item':'Lead the redesign of operational software for the leading entertainment ticketing company resulting in a streamlined workflow, leveraging data for business insight, and increasing tool usability.'}]
     },

    {'website': 'www.fit.edu',
     'logo': 'img/education/FIT.png',
     'title':'Florida Institute of Technology',
     'major': 'M.S. Mechanical Engineering',
     'description':'Performed project management duties of +$200k project including supplier selection and oversight, scheduling, managing customer relationship, and leading teams across three different locations.',
     'year_start': 2004,
     'year_end':2007,
     'company': 'Harris',
     'display_order':3,
     'experience':[{
     'item':'Merit Award for leadership of 12 member team in three states and two plastic manufactures in the redesign of a high-visibility safety item. Managed customer relationship on an ongoing basis and achieved delivery in original launch window'},
     {'item':'Received Exceptional Performance Award for investigating subcontractor manufacturing process and fostering the adoption of quality controls to produce record number of actuators saving the $1M project'
     }]
     },

    {'website': 'www.kellogg.northwestern.edu/',
     'logo': 'img/education/northwestern_seal.jpg',
     'title': 'Kellogg School of Management',
     'major': 'MBA/MMM - Marketing, Finance, Operations',
     'description':'',
     'year_start': 2013,
     'year_end':2015,
     'company': 'Riot',
     'display_order':1,
     'experience':[
     {'item':'Responsible globally for the stewardship of commerce product features on League of Legends which is a 24/7 live game as a service with 67M active players. This includes collecting player insights (i.e. surveys and focus groups), front-end and back-end development, quality assurance, and support. Responsible for selection, contracting, and management of outsourcing vendors in order to provide necessary resources for delivery'},
     {'item':'End of Game Gifting - Released to expand channel reach and target a generous segment of the player base resulting in a roughly $5M+ feature'},
     {'item':'Mystery Gifting - Released for annual Harrowing event which allows players to send a random gift.  Success led to feature becoming permanent followed by expansion into additional regions, products and modes resulting in over $200M+ in revenue since inception'},
     {'item':'Store Optimization - Incremental front-end updates the store to improve player experience through design and analytics based on the over 4-18M+ visitors per week, depending on the region'},
     {'item':'Store API - Created to scale use of 40+ store features across the company.  Leveraged by 6+ teams for 10M+ awards and transactions.  Also includes creation of admin tool for sales and promotion'
     }]
     },

     {'website': 'coursera.com',
     'logo': 'img/education/coursera.png',
     'title': 'Coursera',
     'major':'Gamification, Business of Sports, Algorithms',
     'description':'',
     'year_start': 2014,
     'year_end':'Present',
     'company':'Coursera',
     'display_order':4,
     'experience':[
     {'item':'Developed innovative solutions for clients vital business issues by developing strategic frameworks and formulating actionable roadmaps across industries and functions with a focus on operations and product strategy.  Also performed business development to support sales.'},
     {'item':'Indirect Procurement Analysis - Lead a team to review ten categories of spend for a pharmaceutical company to develop individualized plans for spend reduction. Conducted interviews and analyzed the accounts payable database to provide the client with an organization maturity model, financial analysis, creation of sub-categories, and an action plan across multiple levers to achieve savings'},
     {'item':'Product Development - Led effort in NA to develop product management capability for a mining equipment company including the creation of a portfolio analysis framework, development of product strategy governance (competitor, market, and target descriptions, value case, roadmap), and supported the implementation of processes.  Provided project management, led training, and hosted workshops'},
     {'item':'Strategic Profit Improvement - Performed analysis of network equipment manufacturer product development vertical including rationalization of product portfolio, outsourcing analysis with NPV based on location, level and severance, and a module pricing strategy resulting in estimated savings of $35M'}
     ]
     },

  ];

  $scope.orderProp = 'display_order';
});