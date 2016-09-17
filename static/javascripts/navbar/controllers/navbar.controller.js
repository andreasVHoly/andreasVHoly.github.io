
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

        vm.content = 0;

        vm.expanded = true;

        function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
            vm.expanded = true;
        }

        function closeNav(choice) {
            document.getElementById("mySidenav").style.width = "15%";
            vm.content = choice;
            vm.expanded = false;
        }

    }
})();
