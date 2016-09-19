(function () {
    'use strict';


    // angular.module('my_website',[]);

    angular.module('my_website', [
        'my_website.navbar'
    ]);


})();

angular.module('my_website').run(run);

run.$inject = ['$http'];

/**
 * @name run
 */
function run($http) {
    $.material.init();
}

