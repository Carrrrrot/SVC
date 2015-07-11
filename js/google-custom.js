//Google maps
var map;
var marker;
var theatre = new google.maps.LatLng(50.4552824,30.5051092);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    { "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [ { "color": "#ffffff"} ]},

    { "featureType": "road.highway",
    "stylers": [ { "color": "#b3b3b3" } ] },

    { "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [ { "color": "#e2e2e2" } ] },

    { "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [ { "color": "#d9d9d9" },
    { "weight": 2.5 } ] },

    { "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [ { "visibility": "off" } ] },

    { "featureType": "transit.station.bus",
    "elementType": "labels.icon",
    "stylers": [ { "saturation": -100 },
    { "lightness": 11 } ] },

    { "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [ { "visibility": "off" } ] },
    { }
    ]

  var mapOptions = {
    zoom: 17,
    center: theatre,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

 marker = new google.maps.Marker({
 position: theatre,
 title: "Новий Театр На Печерську"
 });

 marker.setMap(map);
}

