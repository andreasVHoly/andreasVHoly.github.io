
/**
 * NavController
 * @namespace my_website.navbar.controllers
 */
(function () {
    'use strict';

    angular
        .module('my_website.navbar.controllers')
        .controller('NavController', NavController);

    NavController.$inject = ['$location', '$scope'];

    /**
     * @namespace NavController
     */
    function NavController($scope) {

        var vm = this;
        vm.openNav = openNav;
        vm.closeNav = closeNav;


        function openNav() {
            console.log("pressed open");
            document.getElementById("mySidenav").style.width = "100%";
        }

        function closeNav() {
            console.log("pressed close");
            document.getElementById("mySidenav").style.width = "25%";
        }


    }
})();
