'use strict';

module.exports = configure;



configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
   $routeProvider
      .when('/chores', {
         controller: 'ChoresCtrl',
         templateUrl: 'chores/chores.html',
         controllerAs: 'vm',
         resolve: {
            chores: ChorePrepService
         }
      });
}

ChorePrepService.$inject = ['Chore'];
function ChorePrepService(Chore) {
   return Chore.all();
}