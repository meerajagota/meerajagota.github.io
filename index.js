function initMap() {

    /* Data points defined as an array of LatLng objects */
   
// Define locations with names
  
  // Array to hold LatLng objects
  var heatmapData = [new google.maps.LatLng(33.6424, -117.8417),
    new google.maps.LatLng(33.6424, -117.8417),
    new google.maps.LatLng(33.6424, -117.8417),
    new google.maps.LatLng(33.6424, -117.8417),
    new google.maps.LatLng(33.6424, -117.8417)];
  
  
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
