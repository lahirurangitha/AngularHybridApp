'use strict';

angular.
  module('angularJsApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when("/", { // AngularJS 1.x
          templateUrl: "ng1/app/html/home.html",
          controller: "SearchController"
        }).
        when("/test", {
          template: '<h1>lahiru</h1>' // AngularJS 1.x
        }).
        when('/ng2', {
          template: '<ng2-dg></ng2-dg>' // downgraded Angular component
        }).
        otherwise("/404");
    }
  ]);
