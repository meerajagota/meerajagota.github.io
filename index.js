function initMap() {

    /* Data points defined as an array of LatLng objects */
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    const heatmapData = [];
    
    // Find the index of relevant columns
    const latIndex = headers.indexOf('Latitude');
    const lngIndex = headers.indexOf('Longitude');
    const intensityIndex = headers.indexOf('O3 Mean');
    
    // Extract latitude, longitude, and intensity values from each row
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const latitude = parseFloat(values[latIndex]);
        const longitude = parseFloat(values[lngIndex]);
        const intensity = parseFloat(values[intensityIndex]);
        heatmapData.push({ location: { lat: latitude, lng: longitude }, weight: intensity });
    }


// var heatmapData = [
//     new google.maps.LatLng(37.782, -122.447),
//     new google.maps.LatLng(37.782, -122.445),
//     new google.maps.LatLng(37.782, -122.443),
//     new google.maps.LatLng(45, -50),
//     new google.maps.LatLng(-50, 50),
//     new google.maps.LatLng(37.782, -122.437),
//     new google.maps.LatLng(37.782, -122.435),
//     new google.maps.LatLng(37.785, -122.447),
//     new google.maps.LatLng(37.785, -122.445),
//     new google.maps.LatLng(37.785, -122.443),
//     new google.maps.LatLng(37.785, -122.441),
//     new google.maps.LatLng(37.785, -122.439),
//     new google.maps.LatLng(37.785, -122.437),
//     new google.maps.LatLng(37.785, -122.435)
//   ];
  
  var irvine = new google.maps.LatLng(33.6424, -117.8417);
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: irvine,
    zoom: 13,

    });
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 70,
    opacity: 0.5 // Adjust opacity for visibility

  });
  heatmap.setMap(map);


}
