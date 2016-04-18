#geoquakes-angular

This is a refactor of the jQuery geoquakes lab from earlier.

We will be using the [angular-google-maps](https://angular-ui.github.io/angular-google-maps/#!/) directive for this lab. Look at these docs for more information. HINT: use the [marker directive](https://angular-ui.github.io/angular-google-maps/#!/api/marker) to get markers on your map.

#### Important things:
1. `bower install` after you clone to copy all the dependencies into your local project
1. Run a localhost server with `budo -P --host=localhost --open`
1. USGS endpoint: http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
1. Center your map over SF
  1. latitude:  37.78, longitude: -122.44

#### Stretch:
Use the [window directive](https://angular-ui.github.io/angular-google-maps/#!/api/window) to get popups to show when you click on a marker.
