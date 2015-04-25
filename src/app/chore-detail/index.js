'use strict';

var angular = require('angular');

angular
   .module('tamzak')
   .controller('ChoreDetailCtrl', require('./chore-detail.controller'))
   .config(require('./chore-detail.config'));