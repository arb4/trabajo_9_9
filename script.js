
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.995088, -71.320345],
    zoom: 17,
    zoomControl: true
});


				
var	grupos = L.geoJson(grupos, {	
              	    style: function(feature) {
        switch (feature.properties.nom) {
            case 'a': return {color: "yellow"};
            case 'b':   return {color: "green"};
			case 'c':   return {color: "blue"};
			case 'd':   return {color: "orange"};
		
        }
    },

     onEachFeature: function (feature, layer) {
	var txt = "Usted está en el grupo :";	 
	var txt2 = "Homepass";
       layer.bindPopup(txt.fontcolor("DarkGreen")+" "+" "+feature.properties.nom.fontcolor("blue").fontsize(3));
   } 	
                  
              }).addTo(map);
			  
			  
			  
var style1 = {
                    'color': "red",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.5
                };								  
			  
	

var geojsonMarkerOptions = {
    radius: 2.4,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
	
 var cent= L.geoJSON(cent, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);		  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
