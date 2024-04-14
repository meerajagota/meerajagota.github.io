function initMap() {

    /* Data points defined as an array of LatLng objects */
var heatmapData = [
    new google.maps.LatLng(37.782, -122.447),
    new google.maps.LatLng(37.782, -122.445),
    new google.maps.LatLng(37.782, -122.443),
    new google.maps.LatLng(45, -50),
    new google.maps.LatLng(37.782, -122.439),
    new google.maps.LatLng(37.782, -122.437),
    new google.maps.LatLng(37.782, -122.435),
    new google.maps.LatLng(37.785, -122.447),
    new google.maps.LatLng(37.785, -122.445),
    new google.maps.LatLng(37.785, -122.443),
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.785, -122.435)
  ];
  
  var irvine = new google.maps.LatLng(33.6424, -117.8417);
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: irvine,
    zoom: 13,

    });
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 70,
    dissipating: false,
    opacity: 0.25 // Adjust opacity for visibility

  });
  heatmap.setMap(map);


}
