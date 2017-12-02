//Create map variable
var map;
//Array of markers
var markers = [];

var content1 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<a href="imageDetails/seatedBuddha.html"><img src="resources/buddha1.jpg" height= "200" class = "center"></a>' +
                    '<br>' +
                    '<p>Lung-men Caves, Henan Sheng</p>' +
                    '<a href="imageDetails/seatedBuddha.html">Seated Buddha</a>' +
                    '</div>'+
                '</div>';
var content2 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<table>'+
                    '<tr>'+
                        '<td>'+
                            '<a href="imageDetails/standingBuddha.html"><img src="resources/buddha2.jpg" height= "200" class = "center"></a>' +
                            '<br>' +
                            '<p>Mogao Caves, Dunhuang, Jiuquan, Gansu</p>' +
                            '<a href="imageDetails/standingBuddha.html">Standing Buddha</a>' +
                        '</td>'+
                        '<td>'+
                            '<a href="imageDetails/standingBuddha2.html"><img src="resources/buddha9.jpg" height= "200" class = "center"></a>' +
                            '<br>' +
                            '<p>Mogao Caves, Dunhuang, Jiuquan, Gansu</p>' +
                            '<a href="imageDetails/standingBuddha2.html">Standing Buddha 2</a>' +
                        '</td>'+
                    '</div>'+
                '</div>';
var content3 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<a href="imageDetails/leshanBuddha.html"><img src="resources/buddha3.jpg" height= "200" class = "center"></a>' +
                    '<br>' +
                    '<p>Shizhong, Leshan, Sichuan</p>' +
                    '<a href="imageDetails/leshanBuddha.html">Leshan Buddha</a>' +
                    '</div>'+
                '</div>';
var content4 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<a href="imageDetails/buddhaDisciplesBodhisattva.html"><img src="resources/buddha4.jpg" height= "200" class = "center"></a>' +
                    '<br>' +
                    '<p>Bingling Temple, Yongjing, Linxia, Gansu</p>' +
                    '<a href="imageDetails/buddhaDisciplesBodhisattva.html">Buddha, Disciples, and Bodhisattva</a>' +
                    '</div>'+
                '</div>';
var content5 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<a href="imageDetails/seatedBuddha2.html"><img src="resources/buddha5.jpg" height= "200" class = "center"></a>' +
                    '<br>' +
                    '<p>Qigexing Temple, Yanqi Hui Autonomous County, Xinjiang</p>' +
                    '<a href="imageDetails/seatedBuddha2.html">Seated Buddha 2</a>' +
                    '</div>'+
                '</div>';
var content6 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<a href="imageDetails/sculptureOfBuddha.html"><img src="resources/buddha6.jpg" height= "200" class = "center"></a>' +
                    '<br>' +
                    '<p>Longxing Temple, Hebei Sheng</p>' +
                    '<a href="imageDetails/sculptureOfBuddha.html">Sculpture of Buddha</a>' +
                    '</div>'+
                '</div>';
var content7 = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                    '<h3>Unknown Locations</h3>'+
                    '<table>'+
                    '<tr>'+
                        '<td>'+
                            '<a href="imageDetails/buddhistDemon.html"><img src="resources/buddha7.jpg" height= "200" class = "center"></a>' +
                            '<br>' +
                            '<a href="imageDetails/buddhistDemon.html">Buddhist Demon</a>' +
                        '</td>'+
                        '<td>'+
                            '<a href="imageDetails/boddhisattvaAvalokitesvara.html"><img src="resources/buddha8.jpg" height= "200" class = "center"></a>' +
                            '<br>' +
                            '<a href="imageDetails/boddhisattvaAvalokitesvara.html">Boddhisattva Avalokitesvara </a>' +
                            '</div>'+
                        '</td>'+
                        '<td>'+
                            '<a href="imageDetails/seatedBuddha3.html"><img src="resources/buddha10.jpg" height= "200" class = "center"></a>' +
                            '<br>' +
                            '<a href="imageDetails/seatedBuddha3.html">Seated Buddha</a>' +
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                    '</table>'+
                    '</div>'+
                '</div>';

var pictures = [{title: "Seated Buddha", position: {lat: 34.559490, lng: 112.467856}, content: content1},
                {title: "Standing Buddha", position: {lat: 40.041903, lng: 94.809154}, content: content2},
                {title: "Leshan Buddha", position: {lat: 29.544271, lng: 103.771537}, content: content3},
                {title: "Buddha, Disciples, and Bodhisattva", position: {lat: 35.810433, lng: 103.050614}, content: content4},
                {title: "Seated Buddha 2", position: {lat: 41.992672, lng: 86.221047}, content: content5},
                {title: "Sculpture of Buddha", position: {lat: 38.142441, lng: 114.582843}, content: content6},
                {title: "Unknown Locations", position: {lat: 32.486087, lng: 124.527479}, content: content7}

                ];
var iconImage = 'resources/buddhaMarker.png'

function loadMarkers() {
	console.log('creating markers')
    pictures.forEach(function(pictures){
		var infoWindow = new google.maps.InfoWindow({
            content: pictures.content
        })
        console.log(pictures.eventName)
        var marker = new google.maps.Marker({
            map: map,
            position: pictures.position,
            title: pictures.title,
            icon: iconImage
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
