'use strict';

module.exports = ChoreDetailController;


ChoreDetailController.$inject = ['$routeParams', 'Chores'];

function ChoreDetailController ($routeParams, Chores) {
   var self = this;
   self.chore = Chores.findById(parseInt($routeParams.id));
}