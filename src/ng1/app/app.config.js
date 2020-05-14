'use strict';

angular.
  module('angularJsApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when("/", {
          templateUrl: "ng1/app/html/home.html",
          controller: "SearchController"
        }).
        when("/test", {
          template: '<h1>lahiru</h1>'
        })
        .when("/form", {
          templateUrl: "ng1/app/html/simpleForm.html",
          controller: "FormController"
        }).
        otherwise("/404");
    }
  ]);
