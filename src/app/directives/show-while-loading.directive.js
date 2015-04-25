'use strict';

module.exports = ShowWhileLoading;


ShowWhileLoading.$inject = ['$rootScope'];
function ShowWhileLoading($rootScope) {

   return {
      restrict: 'E',
      template: '<div ng-show="isLoading" class="loading">' +
                     'l o a d i n g . . .' +
                '</div>',
      replace: true,
      link: function(scope, element) {
         scope.isLoading = true;

         $rootScope.$on('$routeChangeStart', function() {
            scope.isLoading = true;
         });

         $rootScope.$on('$routeChangeSuccess', function() {
            scope.isLoading = false;
         });
      }
   };

}