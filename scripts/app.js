angular
  .module('geoquakes', ['ngRoute', 'uiGmapgoogle-maps'])
  .config(config);

config.$injext = ['uiGmapGoogleMapApiProvider'];

function config (uiGmapGoogleMapApiProvider) {
  // ...
  // fill this in
  // ...

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
    libraries: 'weather,geometry,visualization'
  });
}
