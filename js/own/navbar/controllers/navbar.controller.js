
/**
 * NavController
 * @namespace my_website.navbar.controllers
 */
(function () {
    'use strict';

    angular
        .module('my_website.navbar.controllers')
        .controller('NavController', NavController);

    NavController.$inject = ['$location'];

    /**
     * @namespace NavController
     */
    function NavController($location) {

        var vm = this;
        vm.openNav = openNav;
        vm.closeNav = closeNav;

        vm.content = 0;

        vm.expanded = true;

        function openNav() {
            // document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("mySidenav").setAttribute('class', 'col-xs-12 col-sm-12 col-md-12 col-lg-12 sidenav');
            vm.expanded = true;
        }

        function closeNav(choice) {
            // document.getElementById("mySidenav").style.width = "16%";
            document.getElementById("mySidenav").setAttribute('class', 'col-xs-2 col-sm-2 col-md-2 col-lg-2 sidenav');
            // vm.content = choice;
            switch(choice){
                case 1:
                    $location.url('/about');
                    break;
                case 2:
                    $location.url('/projects');
                    break;
                case 3:
                    $location.url('/work');
                    break;
            }
            vm.expanded = false;
        }

    }
})();
