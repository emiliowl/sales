(function() {
    'use strict';

    angular.module('msit-store').config(['$stateProvider','$urlRouterProvider',
        function($stateProvider,$urlRouterProvider) {

            $stateProvider.state('root',{
                url: '/app',
                abstract: true,
                template: '<ui-view></ui-view>'
            });

            $stateProvider.state('root.index',{
                url: '/welcome',
                templateUrl: '/views/_welcome.html'
            });

            $stateProvider.state('products',{
                url: '/products',
                abstract: true,
                template: '<ui-view></ui-view>'
            });

            $stateProvider.state('products.index',{
                url: '/',
                templateUrl: '/views/_products.html',
                controller: 'ProductsCtrl as ctrl',
                resolve: {
                    load_products: ['productsService', function (productsService) {
                        return productsService.loadAll();
                    }]
                }
            });

             $stateProvider.state('sales',{
                url: '/sales',
                abstract: true,
                template: '<ui-view></ui-view>'
            });

            $stateProvider.state('sales.index',{
                url: '/',
                templateUrl: '/views/_sales.html',
                controller: 'SalesCtrl as ctrl',
                resolve: {
                    load_products: ['productsService', function (productsService) {
                        return productsService.loadAll();
                    }]
                }
            });

            $stateProvider.state('sales.report',{
                url: '/report',
                templateUrl: '/views/_sales.report.html',
                controller: 'SalesCtrl as ctrl',
                resolve: {
                    load_sales: ['salesService', function (salesService) {
                        return salesService.loadAll();
                    }]
                }
            });

            $urlRouterProvider.otherwise('/app/welcome');
        }
    ]);

})();