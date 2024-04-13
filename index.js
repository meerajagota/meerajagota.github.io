function initMap() {
    var centerPoint = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerPoint,
        zoom: 12
    });

    var circle = new google.maps.Circle({
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.35,
        map: map,
        center: centerPoint,
        radius: 1000 // Radius in meters (1000 meters = 1 kilometer)
    });
}
document.addEventListener('DOMContentLoaded', initMap);
