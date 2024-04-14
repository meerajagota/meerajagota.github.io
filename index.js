function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.6405, lng: -117.8389 },
        zoom: 12 // Zoom level
    });

    var aqi_data = [
        { address: "University of California, Irvine", AQI: 50 },
        { address: "University of California, Berkeley", AQI: 3 }
        // Add more data as needed...
    ];

    // Geocode addresses and prepare data structure
    var promises = aqi_data.map(function(record) {
        return new Promise(function(resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: record.address }, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK && results[0]) {
                    var location = results[0].geometry.location;
                    var latLng = new google.maps.LatLng(location.lat(), location.lng());
                    var intensity = record.AQI / 100; // Normalize to 0-1 range
                    resolve({ location: latLng, weight: intensity });
                } else {
                    reject(new Error('Geocode failed for address: ' + record.address));
                }
            });
        });
    });

    Promise.all(promises).then(function(heatmapData) {
        // Create Heatmap Layer
        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            dissipating: true,
            radius: 20 // Adjust radius as needed
        });

        // Add Heatmap Layer to the Map
        heatmap.setMap(map);
    }).catch(function(error) {
        console.error(error);
    });
}
