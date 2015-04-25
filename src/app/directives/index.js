'use strict';

var angular = require('angular');

angular
   .module('tamzak.directives', [])
   .directive('showWhileLoading', require('./show-while-loading.directive'));