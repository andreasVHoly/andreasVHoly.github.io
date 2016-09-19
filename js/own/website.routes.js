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
                templateUrl: 'templates/about.html'
            })
            .when('/work', {
                templateUrl: 'templates/work.html'
            })
            .when('/projects', {
                templateUrl: 'templates/projects.html'
            })
            .otherwise({
                templateUrl: 'templates/404.html'
            });
    }
})();
