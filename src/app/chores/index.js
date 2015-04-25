'use strict';

var angular = require('angular');

angular
   .module('tamzak.chores', [
      'ngRoute'
   ])
   .controller('ChoresCtrl', require('./chores.controller'))
   .config(require('./chores.config'));