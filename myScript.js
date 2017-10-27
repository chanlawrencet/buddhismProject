//Create map variable
var map;
//Array of markers
var markers = [];

var content1 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<img src="buddha1.jpeg" height= "100" class = "center">' +
                    '<p>here is a description of this buddha1</p>'+
                    '</div>'+
                '</div>';

var pictures = [{title: "1", position: {lat: 42.404391, lng: -71.113852}, content: content1}];

function loadMarkers() {
	console.log('creating markers')
	geocoder = new google.maps.Geocoder()
    pictures.forEach(function(pictures){
		var infoWindow = new google.maps.InfoWindow({
            content: pictures.content
        })
        console.log(pictures.eventName)
        var marker = new google.maps.Marker({
            map: map,
            position: pictures.position,
            title: pictures.title
        })

		
        marker.addListener('click', function () {
			infoWindow.open(map, marker)
		})
				
	})
}

function initMap() {
	map_options = {
		zoom: 4,
		center: {lat: 36.209547, lng: 96.639701},
		zoomControl: false,
        gestureHandling: 'greedy',
        fullscreenControl: false
	}

    map_document = document.getElementById('map')
    map = new
    google.maps.Map(map_document, map_options);
    loadMarkers();
/*    map.addListener('click', function(event) {
    	var latitude = event.latLng.lat();
    	var longitude = event.latLng.lng();
    	console.log(latitude)
    	console.log(longitude)
    	var marker = new google.maps.Marker({
    		map:map,
    		draggable: true,
    		animation: google.maps.Animation.DROP,
    		position: {lat: latitude,
    		lng: longitude},
    		title: 'marker!'
    	})
    });*/
}
