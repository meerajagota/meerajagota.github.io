function initMap() {
    // Create a new map object centered at a specific location
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // New York City coordinates
        zoom: 12 // Zoom level
    });
}
