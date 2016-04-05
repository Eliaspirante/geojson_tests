
var map = new L.Map('map', {center: new L.LatLng(-15.79, -47.88), zoom: 4});

var googleLayer = new L.Google('ROADMAP');

var icone = L.Icon({
	iconUrl: '/images/marker-icon.png',
	shadowUrl: '/images/marker-shadow.png',
	iconSize:     [38, 95], // size of the icon
	});

function basement(feature, layer){
	layer.bindPopup(feature.properties.NM_MUNICIP);
	L.marker(feature.geometry.coordinates[0][0],icone).addTo(map);
};

L.geoJson(areas, {
	onEachFeature: basement
}).addTo(map);

// map.addLayer(googleLayer);