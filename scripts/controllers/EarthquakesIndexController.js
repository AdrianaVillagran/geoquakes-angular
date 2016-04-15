angular
  .module('geoquakes')
  .controller('EarthquakesIndexController', EarthquakesIndexController);

EarthquakesIndexController.$inject = ['$http'];

function EarthquakesIndexController ($http) {

  var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
  var vm = this;
  vm.map = { center: { latitude:  37.78, longitude: -122.44 }, zoom: 2 };

  $http({
    method: 'GET',
    url: weekly_quakes_endpoint
  }).then(function successCallback(response) {
    vm.earthquakes = response.data.features;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
