angular
  .module('geoquakes')
  .controller('QuakesIndexController', QuakesIndexController);

QuakesIndexController.$inject=['$http'];
function QuakesIndexController( $http) {
  var vm = this;
  vm.map = {
    center: { latitude: 37.78, longitude: -122.44 },
    zoom: 3
  };

  var endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
  $http({
    method: 'GET',
    url: endpoint
  }).then(function successQuakes(response) {
    console.log(response.data.features);
    vm.quakes = response.data.features;
  }, function errorQuakes(response) {
    console.log('error getting quakes:', response);
  });
}
