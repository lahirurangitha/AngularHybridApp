"use strict";

angular.module("angularJsApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/", {
        // AngularJS 1.x
        templateUrl: "ng1/app/html/home.html",
        controller: "SearchController",
      })
      .when("/form", {
        templateUrl: "ng1/app/html/simpleForm.html",
        controller: "FormController",
      })
      .otherwise("/404");
  },
]);
