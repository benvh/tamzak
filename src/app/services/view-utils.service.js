'use strict';

module.exports = function() {

   var service = {
      spaceOutString: spaceOutString
   };

   return service;

   function spaceOutString(str) {
      return str.split('').join(' ');
   }

};