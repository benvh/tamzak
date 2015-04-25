'use strict';

module.exports = Chore;



Chore.$inject = ['$q', '$timeout'];

function Chore($q, $timeout) {
   var service = {
      all: all,
      remove: remove,
      findById: findById,
      finish: finish
   };

   var choresStore = [
      {
         id: 1,
         name: 'Do the dishes',
         description: '...',
         inCharge: 'Yves',
         participants: ['Yves', 'Ben']
      },
      {
         id: 2,
         name: 'Empty trash bin',
         description: '...',
         inCharge: 'Ben',
         participants: ['Yves', 'Ben', 'Gerrit', 'Pauwel']
      },
      {
         id: 3,
         name: 'Take out trash',
         description: '...',
         inCharge: 'Ben',
         participants: ['Yves', 'Ben']
      },
      {
         id: 4,
         name: 'Clean out carboard boxes',
         description: '...',
         inCharge: 'Yves',
         participants: ['Yves', 'Ben']
      },
      {
         id: 5,
         name: 'Some random task with a long name solely for testing purposes',
         description: '...',
         inCharge: 'Yves',
         participants: ['Yves', 'Ben', 'i', 'can', 'see', 'you']
      }
   ];

   return service;

   /////////////
   // SOME UTILTY STUFF
   function findChoreIndex(chore) {
      for(var i = 0, length = choresStore.length; i < length; i++) {
         if(choresStore[i].id === chore.id) {
            return i;
         }
      }
      return -1;
   }



   ///////////////////

   function all() {
      var defer = $q.defer();

      $timeout(function() {
         defer.resolve(choresStore);
      }, 3000);

      return defer.promise;
   }

   function update(chore) {

      var index = findChoreIndex(chore.id);
      choresStore[index] = chore;

      return $q.when(choresStore[index]);
   }

   function remove(chore) {
      var index = findChoreIndex(chore);

      if(index >= 0 && index < choresStore.length) {
         choresStore.splice(index, 1);
         return $q.when(true);
      } else {
         return $q.when(false);
      }
      // return $q.when( function() {
      //    for(var i = 0, length = choresStore.length; i < length; i++) {
      //       if(choresStore[i].id === chore.id) {
      //          choresStore.splice(i, 1);
      //          break;
      //       }
      //    }
      // });
   }

   function findById(id) {
      for(var i = 0, length = choresStore.length; i < length; i++) {
         if(choresStore[i].id === id) {
            return $q.when(choresStore[i]);
         }
      }
      return $q.when(undefined);
   }

   function finish(chore) {
      //fake update stuff... I don't want to update the view model object directly here... for testing purposes i want to handle this in the controller... promises!
      var participants = chore.participants;
      var nextUp = (participants.indexOf(chore.inCharge) + 1) % participants.length;

      var newChore = {
         id: chore.id,
         name: chore.name,
         description: chore.description,
         inCharge: participants[nextUp],
         participants: chore.participants
      };

      return update(newChore);
   }
}