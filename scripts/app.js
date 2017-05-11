// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var map;
var icon = 'images/earthquake.png';
// var icon = '/Users/vivi/Desktop/wdi/geoquakes/images/earthquake.png';

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  initMap();
  getQuake();

  //map here



  function initMap() {
    var austin = {lat: 30.2682, lng: -97.74295};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: austin
    });

    var marker = new google.maps.Marker({
      position: austin,
      map: map,
      icon: icon
    });
  }



// map here
});

function getQuake() {
  $.ajax({
  	method: "GET",
  	url: weekly_quakes_endpoint,
  	datatype: "json",
  	success: onSuccess,
  	error: onError
});

}

function onSuccess(json){
  // TODO: forEach (earthquake)
  for (i = 0; i < json.features.length; i++){
    var title = json.features[i].properties.title;

    var lat = json.features[i].geometry.coordinates[1];
    var lng = json.features[i].geometry.coordinates[0];
    var marker = new google.maps.Marker({
      position:
      {
        lat: lat,
        lng: lng,

      },
      map: map,
      icon: icon
    });
    $('#info').append(`<p>${title}</p>`);

  }
}

function onError(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}
