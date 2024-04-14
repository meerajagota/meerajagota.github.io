function initMap() {

    /* Data points defined as an array of LatLng objects */
   
// Define locations with names
var locations = [
    "San Francisco, CA",
    "New York, NY",
    "Los Angeles, CA",
    "London, UK",
    "Tokyo, Japan"
  ];
  
  // Initialize geocoder
  var geocoder = new google.maps.Geocoder();
  
  // Array to hold LatLng objects
  var heatmapData = [];
  
  // Loop through locations and geocode each one
  locations.forEach(function(location) {
    geocoder.geocode({ address: location }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        // Extract latitude and longitude from geocoding result
        var latLng = results[0].geometry.location;
        // Push LatLng object to heatmapData array
        heatmapData.push(latLng);
      } else {
        console.log("Geocoding failed for: " + location);
      }
    });
  });
  
  
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
