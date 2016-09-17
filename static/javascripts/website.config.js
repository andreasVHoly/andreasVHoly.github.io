(function () {
    'use strict';

    angular.module('my_website.config').config(config);

    config.$inject = ['$locationProvider'];

    /**
     * @name config
     * @desc Enable HTML5 routing
     */
    function config($locationProvider, $translateProvider, FacebookProvider) {
        //html5 routing and trailing /'s
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

    }
})();
