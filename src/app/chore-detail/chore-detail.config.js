'use strict';

module.exports.$inject = ['$routeProvider'];
module.exports = function($routeProvider) {
   $routeProvider
   .when('/chores/:id', {
      controller: 'ChoreDetailCtrl',
      templateUrl: 'chore-detail/chore-detail.html',
      controllerAs: 'vm'
   });
};