angular
  .module('geoquakes', ['ngRoute', 'uiGmapgoogle-maps'])
  .config(config);

config.$inject = ['uiGmapGoogleMapApiProvider'];
function config (  uiGmapGoogleMapApiProvider  ) {
  // ...
  // fill this in with $routeProvider and $locationProvider
  // ...

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
    libraries: 'weather,geometry,visualization'
  });
}
