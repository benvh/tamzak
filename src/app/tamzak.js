'use strict';

var angular = require('angular');
var angularRoute = require('angular-route');
var angularAnimate = require('angular-animate');

require('./directives');
require('./services');
require('./resources');
require('./chores');

angular
   .module('tamzak', [
      'ngRoute',
      'ngAnimate',
      'tamzak.directives',
      'tamzak.services',
      'tamzak.resources',
      'tamzak.chores'
   ])
   .config(require('./tamzak.config'));