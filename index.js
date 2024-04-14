var initialIcon = {
    url: 'initial_icon.png', // URL of the initial icon image
    scaledSize: new google.maps.Size(40, 40), // Size of the icon
};

var alternateIcon = {
    url: 'alternate_icon.png', // URL of the alternate icon image
    scaledSize: new google.maps.Size(40, 40), // Size of the icon
};

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.6405, lng: -117.8389 }, 
        zoom: 12 // Zoom level
    });

    var aqi_data = [
        { address: "University of California, Irvine", AQI: 50 },
        { address: "University of California, Berkeley", AQI: 3 },
        { address: "Los Angeles", AQI: 100 }
        // Add more data as needed...
    ];
    
    
    
    // Geocode addresses and prepare data structure
    var heatmapData = [];
    aqi_data.forEach(function(record) {
        // Use geocoding service to convert address to coordinates
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: record.address }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK && results[0]) {
                var location = results[0].geometry.location;
                var latLng = new google.maps.LatLng(location.lat(), location.lng());
                // Normalize AQI index and add to heatmap data
                var intensity = record.AQI / 100; // Normalize to 0-1 range
                heatmapData.push({ location: latLng });
            }
        });
    });

    
    // Create Heatmap Layer
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        dissipating: true,
        radius: 20 // Adjust radius as needed
    });

    // Add Heatmap Layer to the Map
    heatmap.setMap(map);

}
