angular
  .module('geoquakes', ['ngRoute', 'uiGmapgoogle-maps'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider','uiGmapGoogleMapApiProvider'];
function config ( $routeProvider, $locationProvider, uiGmapGoogleMapApiProvider  ) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/templates/quakes.html',
      controllerAs: 'quakesIndexCtrl',
      controller: 'QuakesIndexController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
    libraries: 'weather,geometry,visualization'
  });
}
