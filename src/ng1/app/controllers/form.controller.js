angular.module("angularJsApp").controller("FormController", function ($scope) {
  $scope.title = "JS Form";

  /*  This selectedDate is the var which stores the date in angularjs side
      and it will pass as an input to the angular component.
  */
  $scope.selectedDate = new Date();

  /** This will get triggered when the downgraded component
      emits the output and from the html template it passes the event.
      Using that event object, I have updated the selected date in controller
   */
  $scope.onValChange = function (e) {
    $scope.selectedDate = new Date(e);
  };
});
