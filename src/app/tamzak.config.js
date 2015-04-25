'use strict';

module.exports = configure;


configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
   $routeProvider
      .when('/', {
         redirectTo: '/chores'
      })
      .otherwise({
         template: '404 - page not found'
      });
}