'use strict';

var angular = require('angular');

// angular
//    .module('tamzak')
//    .factory('Chores', require('./chores.service'))
//    .factory('ViewUtils', require('./view-utils.service'));

angular
   .module('tamzak.services', [])
   .factory('ViewUtils', require('./view-utils.service'));