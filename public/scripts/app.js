/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('geoquakes', ['ngRoute', 'uiGmapgoogle-maps'])
  .config(config);

config.$injext = ['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider'];

function config ($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/earthquakes',
      controllerAs: 'earthquakesIndexCtrl',
      controller: 'EarthquakesIndexController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
  });
}
