'use strict';

var angular = require('angular');

angular
   .module('tamzak.resources', [])
   .factory('Chore', require('./chore.resource'));