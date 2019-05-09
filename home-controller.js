"use strict"; 
{
    angular.module('app')
      .controller('HomeController', function ($window) {
        const $ctrl = this;

        $ctrl.linkedIn = function ()
        {
            let url = 'https://www.linkedin.com/in/anthony-chetcuti/';
            $window.open(url, '_blank');

        }

        $ctrl.gitHub = function ()
        {
            let url = 'https://github.com/achetcu';
            $window.open(url, '_blank');
            //https://www.w3schools.com/icons/fontawesome_icons_brand.asp

        }

        

    });
}