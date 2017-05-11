// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var map;

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
      map: map
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
  //console.log(json);
  // var lat = json.features[0].geometry.coordinates[0];
  // var lng = json.features[0].geometry.coordinates[1];
  // console.log(lat + "  " + lng);
  // TODO: forEach (earthquake)
  for (i = 0; i < json.features.length; i++){
    var title = json.features[i].properties.title;

    var lat = json.features[i].geometry.coordinates[0];
    var lng = json.features[i].geometry.coordinates[1];
    var marker = new google.maps.Marker({
      position:
      {
        lat: lat,
        lng: lng
      },
      map: map
    });
    $('#info').append(`<p>${title}</p>`);

  }
}

function onError(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}
