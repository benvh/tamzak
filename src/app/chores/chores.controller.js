'use strict';

module.exports = ChoresController;


ChoresController.$inject = ['$location', 'chores', 'Chore', 'ViewUtils'];

function ChoresController($location, chores, Chore, ViewUtils) {
   var self = this;

   self.chores = chores;
   self.utils = ViewUtils;

   self.deleteChore = deleteChore;
   self.showChoreDetails = showChoreDetails;
   self.finishChore = finishChore;


   /////////////

   function deleteChore(chore) {
      Chore.remove(chore).then( function(isRemoved) {

         if(isRemoved) {
            for(var i = 0, length = self.chores.length; i < length; i++) {
               if(self.chores[i].id === chore.id) {
                  self.chores.splice(i, 1);
                  break;
               }
            }
         }

      });
   }

   function showChoreDetails(chore) {
      var url = '/chores/' + chore.id;
      $location.path(url);
   }

   function finishChore(chore) {
      Chore.finish(chore).then(function(updatedChore) {
         chore.inCharge = updatedChore.inCharge;
      });
   }
}