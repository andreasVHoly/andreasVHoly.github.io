(function() {
    'use strict';

    angular.module('my_website.routes').config(config);

    config.$inject = ['$routeProvider'];


    /**
     * @name config
     * @desc Define valid application routes
     */
    function config($routeProvider) {
        $routeProvider
            .when('/about', {
                controller: 'ReviewLanguageController',
                controllerAs: 'vm',
                templateUrl: '/static/templates/about.html'
            })
            .otherwise('/');
    }
})();
