angular
  .module("angularJsApp")
  .controller("SearchController", function ($scope) {
    // The data model. These items would normally be requested via AJAX,
    // but are hardcoded here for simplicity.

    $scope.items = [
      {
        title: 'Dell-streak',
        image: 'ng1/app/img/phones/dell-streak-7.0.jpg'
      },
      {
        title: 'Motorola-atrix-4g',
        image: 'ng1/app/img/phones/motorola-atrix-4g.0.jpg'
      },
      {
        title: 'Nexus-s',
        image: 'ng1/app/img/phones/nexus-s.0.jpg'
      },
      {
        title: 'Samsung-galaxy-tab',
        image: 'ng1/app/img/phones/samsung-galaxy-tab.0.jpg'
      },
      {
        title: 'Samsung-galaxy-s-phone',
        image: 'ng1/app/img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg'
      }
    ];

  });
