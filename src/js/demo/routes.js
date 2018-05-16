angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider ) {
  $stateProvider
  .state('app.icons', {
    url: "/icons",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Icons'
    }
  })
  .state('app.icons.flags', {
    url: '/flags',
    templateUrl: 'views/icons/flags.html',
    ncyBreadcrumb: {
      label: 'Flags'
    }
  })
  .state('app.icons.fontawesome', {
    url: '/font-awesome',
    templateUrl: 'views/icons/font-awesome.html',
    ncyBreadcrumb: {
      label: 'Font Awesome'
    }
  })
  .state('app.icons.simplelineicons', {
    url: '/simple-line-icons',
    templateUrl: 'views/icons/simple-line-icons.html',
    ncyBreadcrumb: {
      label: 'Simple Line Icons'
    }
  })
  .state('app.components', {
    url: "/components",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  })
  .state('app.components.buttons', {
    url: '/buttons',
    templateUrl: 'views/components/buttons.html',
    ncyBreadcrumb: {
      label: 'Buttons'
    }
  })
  .state('app.components.social-buttons', {
    url: '/social-buttons',
    templateUrl: 'views/components/social-buttons.html',
    ncyBreadcrumb: {
      label: 'Social Buttons'
    }
  })
  .state('app.components.cards', {
    url: '/cards',
    templateUrl: 'views/components/cards.html',
    ncyBreadcrumb: {
      label: 'Cards'
    }
  })
  .state('app.components.forms', {
    url: '/forms',
    templateUrl: 'views/components/forms.html',
    ncyBreadcrumb: {
      label: 'Forms'
    }
  })
  .state('app.components.switches', {
    url: '/switches',
    templateUrl: 'views/components/switches.html',
    ncyBreadcrumb: {
      label: 'Switches'
    }
  })
  .state('app.components.arrivals',{
      url: '/arrivals',
      templateUrl: 'views/components/arrivals.html',
      controller : 'arrivals',
      ncyBreadcrumb:{
          label: 'arrivals'
      }
  })
      .state('app.components.newarrivals',{
      url: '/arrivals',
      templateUrl: 'views/components/newarrivals.html',
      ncyBreadcrumb:{
          label: 'new arrivals'
      }
  })
  
   .state('app.components.price',{
      url: '/price',
      templateUrl: 'views/components/price.html',
      ncyBreadcrumb:{
          label: 'price'
      }
  })
  
   .state('app.components.pri',{
      url: '/pri',
      templateUrl: 'views/components/pri.html',
      ncyBreadcrumb:{
          label: 'pri'
      }
  })
  
    .state('app.components.capacity',{
      url: '/capacity',
      templateUrl: 'views/components/capacity.html',
      ncyBreadcrumb:{
          label: 'capacity'
      }
  }) 
      
      .state('app.components.booking',{
      url: '/booking',
      templateUrl: 'views/components/booking.html',
      ncyBreadcrumb:{
          label: 'booking'
      }
  })   .state('app.components.report1',{
      url: '/report1',
      templateUrl: 'views/components/report1.html',
      ncyBreadcrumb:{
          label: 'report1'
      }
  })   .state('app.components.report2',{
      url: '/report2',
      templateUrl: 'views/components/report2.html',
      ncyBreadcrumb:{
          label: 'report2'
      }
  }) 
      .state('app.components.blockday',{
      url: '/blockday',
      templateUrl: 'views/components/blockday.html',
      ncyBreadcrumb:{
          label: 'blockday'
      }
  })
      
      .state('app.components.blockparking',{
      url: '/blockparking',
      templateUrl: 'views/components/blockparking.html',
      ncyBreadcrumb:{
          label: 'blockparking'
      }
  })
      .state('app.components.summary',{
      url: '/summary',
      templateUrl: 'views/components/summary.html',
      ncyBreadcrumb:{
          label: 'summary'
      }
  }) 
      .state('app.components.blockcar',{
      url: '/blockcar',
      templateUrl: 'views/components/blockcar.html',
      ncyBreadcrumb:{
          label: 'blockcar'
      }
  })
  
  .state('app.components.returns', {
    url: '/tables',
    templateUrl: 'views/components/returns.html',
    ncyBreadcrumb: {
      label: 'returns'
    },
      
          resolve: {
      // Plugins loaded before
      // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     return $ocLazyLoad.load([
      //         {
      //             serial: true,
      //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
      //         }
      //     ]);
      // }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers.js']
        });
      }]
    }
  })
  .state('app.widgets', {
    url: '/widgets',
    templateUrl: 'views/widgets.html',
    ncyBreadcrumb: {
      label: 'Widgets'
    },
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/widgets.js']
        });
      }]
    }
  })
  .state('app.charts', {
    url: '/charts',
    templateUrl: 'views/charts.html',
    ncyBreadcrumb: {
      label: 'Charts'
    },
    resolve: {
      // Plugins loaded before
      // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     return $ocLazyLoad.load([
      //         {
      //             serial: true,
      //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
      //         }
      //     ]);
      // }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/charts.js']
        });
      }]
    }
  })
     
  
}]);
