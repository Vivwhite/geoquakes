// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
initMap()
getQuake()

//map here


var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 30.2682, lng: -97.74295},
  zoom: 8
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
  // TODO: forEach (earthquake)
  for (i = 0; i < json.features.length; i++){
    var title = json.features[i].properties.title;
    $('#info').append(`<p>${title}</p>`);

  }
}

function onError(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}
