function initialize() {
            // Styles
            var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ffcd00"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#c0c1c2"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7f8182"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
            var styledMap = new google.maps.StyledMapType(styles,
                {name: "Styled Map"});
            // Set map-option
            var mapOptions = {
                center: new google.maps.LatLng(50.4552824,30.5051092),
                zoom: 15,
                disableDefaultUI: true,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                streetViewControl:true,
                scrollwheel: false,
                mapTypeControlOptions: {
                    mapTypeIds: ['map-style']
                }
            };
            // Select map-blocks in HTML
            var mapCanvas = document.getElementById('map-canvas');
            // Create map
            var map = new google.maps.Map(mapCanvas, mapOptions);
            // Add Markers
            setMarkers(map, introPro);
            //Info window events
            var myOpenMarker;

            google.maps.event.addListener(markerArr[0], 'click', function() {
                artemaInfo.open(map,markerArr[0]);
                if(myOpenMarker) myOpenMarker.close();
                myOpenMarker = hryshkaInfo;
            });
            google.maps.event.addListener(map, 'click', function() {
                if(myOpenMarker) myOpenMarker.close();
            });
            // Add custom styles to map
            map.mapTypes.set('map-style', styledMap);
            map.setMapTypeId('map-style');
        }
        //Our Markers - IntroPro Offices
        var introPro = [
            ['SVC, Kiev, Artema str.', 50.4552824,30.5051092],
        ];
        // Add markers to the map
        var markerArr = [];
        function setMarkers(map, locations) {

            var image = {
                url: './images/location.png',
            };
            for (var i = 0; i < locations.length; i++) {
                var introPro = locations[i];
                var myLatLng = new google.maps.LatLng(introPro[1], introPro[2]);
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    icon: image,
                    animation: google.maps.Animation.DROP,
                    title: introPro[0],
                    zIndex: introPro[3]
                });
                markerArr.push(marker);
            }
        }
        // InfoWindow KIEV - artema
        var artema = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">School of visual communication</h3>'+
            '<div id="bodyContent">'+
                '<p>1-5, Artema str., Kiev, 04053</p>'+
                '<p>+380 44 360 45 40</p>'+
            '</div>'+
        '</div>';
        var artemaInfo = new google.maps.InfoWindow({
            content: artema
        });
        // Initialize Google-Map
        google.maps.event.addDomListener(window, 'load', initialize);
