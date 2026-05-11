var workhistApp = angular.module('workhistApp', []);

workhistApp.controller('WorkHistCtrl', function ($scope, $modal, $log) {
    $scope.jobs = [
        {
            'website': 'developer.oculus.com',
            'logo': 'img/jobs/oculus.png',
            'title': 'Product Manager - Oculus',
            'description': 'Responsible for building an amazing developer experience for making apps on Oculus Quest.',
            'year_start': 2020,
            'year_end': 'Present',
            'company': 'Facebook',
            'experience': [{'item': 'Built publisher insights for growing and engaging with customers'},{'item': 'Launched comms platform for informing devs on a rapidly changing space.'},{'item': 'Modernized the website to be journey based.'}
                ]
        },
        {
            'website': 'stadia.dev',
            'logo': 'img/jobs/stadia_logo.png',
            'title': 'Product Manager - Stadia',
            'description': 'Responsible for building an amazing developer experience for making games on Stadia.',
            'year_start': 2018,
            'year_end': '2020',
            'company': 'Google',
            'experience': [{'item': 'Lead the announcement of Stadia at GDC 2019'},{'item': 'Responsible for gamer services and technical certification.'},{'item': 'Part of the launch team.'}
                ]
        },
        {
            'website': 'beachbody.com',
            'logo': 'img/jobs/beachbody.png',
            'title': 'Senior Manager - Product Management',
            'description': 'Responsible for ecommerce, conversion optimization through testing, and introducing modern design approaches.',
            'year_start': 2016,
            'year_end': 2018,
            'company': 'Beachbody',
            'experience': [{'item': 'Increased conversion by >2% through optimization'},{'item': 'Redesigned the checkout flow to improve user experience and conversion'},{'item': 'Modernized foundational technology to increase speed of development by 200%'}
                ]
        },
        {
            'website': 'mobcrush.com',
            'logo': 'img/jobs/mobcrushlogo.png',
            'title': 'Senior Product Manager',
            'description': 'Responsible for developing the product management function to support scale.  Includes building the structure for an agile development process across business, product, design, and engineering.  Mentoring other product managers for excellence.',
            'year_start': 2016,
            'year_end': '2016',
            'company': 'Mobcrush',
            'experience': [{'item': 'Developed the strategic roadmap and manage features to insure successful growth post-launch.'}
                ]
        },
        {
            'website': 'pivotal.io/labs',
            'logo': 'img/jobs/pivotallabs.jpg',
            'title': 'Senior Product Manager',
            'description': 'Responsible for executing product design through Discovery & Framing and software development using extreme programming methodology (weekly iterations, pair programming) in a client facing role. Also responsible for enablement and training of clients to build up product capabilities. Industries range from live music entertainment to mortgage lending.',
            'year_start': 2015,
            'year_end': '2016',
            'company': 'Pivotal',
            'experience': [{'item': 'Developed the product roadmap for the fraud identification product of the leading mortgage lending data company in order to target top tier banking companies to gain significant increase in market share and revenue.'},
                {'item': 'Lead the redesign of operational software for the leading entertainment ticketing company resulting in a streamlined workflow, leveraging data for business insight, and increasing tool usability.'}]
        },

        {
            'website': 'harris.com',
            'logo': 'img/jobs/harris.png',
            'title': 'Mechanical Engineer 2',
            'description': 'Performed project management duties of +$200k project including supplier selection and oversight, scheduling, managing customer relationship, and leading teams across three different locations.',
            'year_start': 2004,
            'year_end': 2007,
            'company': 'Harris',
            'experience': [{
                'item': 'Merit Award for leadership of 12 member team in three states and two plastic manufactures in the redesign of a high-visibility safety item. Managed customer relationship on an ongoing basis and achieved delivery in original launch window'
            },
                {
                    'item': 'Received Exceptional Performance Award for investigating subcontractor manufacturing process and fostering the adoption of quality controls to produce record number of actuators saving the $1M project'
                }]
        },

        {
            'website': 'riotgames.com',
            'logo': 'img/jobs/riotgames.jpg',
            'title': 'Product Manager',
            'description': 'Product Manager for the 10+ member store team where I work in conjunction with eCommerce, design, and developers to insure players feel good about their purchase experience with robust service availability. Responsible for developing a product vision and roadmap, maintaining a well groomed backlog, and supporting the development process in Agile/Kanban.',
            'year_start': 2013,
            'year_end': 2015,
            'company': 'Riot',
            'experience': [
                {'item': 'Responsible globally for the stewardship of commerce product features on League of Legends which is a 24/7 live game as a service with 67M active players. This includes collecting player insights (i.e. surveys and focus groups), front-end and back-end development, quality assurance, and support. Responsible for selection, contracting, and management of outsourcing vendors in order to provide necessary resources for delivery'},
                {'item': 'End of Game Gifting - Released to expand channel reach and target a generous segment of the player base resulting in a roughly $5M+ feature'},
                {'item': 'Mystery Gifting - Released for annual Harrowing event which allows players to send a random gift.  Success led to feature becoming permanent followed by expansion into additional regions, products and modes resulting in over $200M+ in revenue since inception'},
                {'item': 'Store Optimization - Incremental front-end updates the store to improve player experience through design and analytics based on the over 4-18M+ visitors per week, depending on the region'},
                {
                    'item': 'Store API - Created to scale use of 40+ store features across the company.  Leveraged by 6+ teams for 10M+ awards and transactions.  Also includes creation of admin tool for sales and promotion'
                }]
        },

        {
            'website': 'ibm.com',
            'logo': 'img/jobs/ibm_logo.jpg',
            'title': 'Managing Consultant',
            'description': 'Responsible for defining scope, gathering requirements, performing complex quantitative analysis, programming models, and working side-by-side with the client to form business, marketing, and operations strategy.  Also experienced with program management including issue tracking, risk analysis, budget and schedule planning.',
            'year_start': 2011,
            'year_end': 2013,
            'company': 'IBM',
            'experience': [
                {'item': 'Developed innovative solutions for clients vital business issues by developing strategic frameworks and formulating actionable roadmaps across industries and functions with a focus on operations and product strategy.  Also performed business development to support sales.'},
                {'item': 'Indirect Procurement Analysis - Lead a team to review ten categories of spend for a pharmaceutical company to develop individualized plans for spend reduction. Conducted interviews and analyzed the accounts payable database to provide the client with an organization maturity model, financial analysis, creation of sub-categories, and an action plan across multiple levers to achieve savings'},
                {'item': 'Product Development - Led effort in NA to develop product management capability for a mining equipment company including the creation of a portfolio analysis framework, development of product strategy governance (competitor, market, and target descriptions, value case, roadmap), and supported the implementation of processes.  Provided project management, led training, and hosted workshops'},
                {'item': 'Strategic Profit Improvement - Performed analysis of network equipment manufacturer product development vertical including rationalization of product portfolio, outsourcing analysis with NPV based on location, level and severance, and a module pricing strategy resulting in estimated savings of $35M'}
            ]
        },

        {
            'website': 'sysplan.com',
            'logo': 'img/jobs/SPC_logo.png',
            'title': 'Research Engineer',
            'description': 'Identified investment opportunities (~$200k-$5M) and managed progress of disruptive technology initiatives for Defense Advance Research Projects Agency (DARPA).  Example technologies include unmanned air vehicles (UAV), unmanned underwater vehicles (UUV), mesoscale oscillators, and high-frequency analog communications.',
            'year_start': 2008,
            'year_end': 2009,
            'company': 'SPC',
            'experience': [
                {'item': 'Identified military capability gaps for Department of Defense (DARPA) including a feasibility study of high-risk/reward technologies (UxVs, electronics) by conducting extensive interviews of suppliers and customers.  Gained Director approval of two pursuits for a total funding of $10M'}
            ]
        }
    ];

    $scope.orderProp = 'year_start';

    $scope.open = function (job) {


        var modalInstance = $modal.open({
            templateUrl: 'careerModal.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                items: function () {
                    return job;
                }
            }
        });

        modalInstance.result.then(function () {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date() + ' with scope: ' + job.company);
        });

    };

});

angular.module('workhistApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
    $scope.job = items;
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
