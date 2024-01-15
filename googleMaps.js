// Inserting Google Maps with JavaScript
// in html must be <div id="map"></div>
// in html must be <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
// script with free api key for training. It works only in browser:
// <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap"></script>
// website: https://developers.google.com/maps/documentation/javascript/get-api-key
// website to get json file with css styles for custom maps: https://snazzymaps.com/style/
// to get coordinates it needs to use google maps.Write address in the form .And get coordinates by clicking on the map with right mouse button.

// example 1
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

// window.initMap = initMap;


// example 2
function initMap() {
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
  });
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Click to zoom",
  });

  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}

// window.initMap = initMap;


// example 3 with custom map styles
let map1;

async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");

  map1 = new Map(document.getElementById("map"), {
    center: { lat: 50.02251854120448, lng: 36.3442121686724 },
    zoom: 12,
    styles: [
      {
          "featureType": "all",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#202c3e"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "gamma": 0.01
              },
              {
                  "lightness": 20
              },
              {
                  "weight": "1.39"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "weight": "0.96"
              },
              {
                  "saturation": "9"
              },
              {
                  "visibility": "on"
              },
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 30
              },
              {
                  "saturation": "9"
              },
              {
                  "color": "#29446b"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": 20
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 20
              },
              {
                  "saturation": -20
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 10
              },
              {
                  "saturation": -30
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#193a55"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "saturation": 25
              },
              {
                  "lightness": 25
              },
              {
                  "weight": "0.01"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": -20
              }
          ]
      }
  ]
  });
}

// initMap();

 
