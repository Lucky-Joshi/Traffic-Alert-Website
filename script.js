let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
        zoom: 13
    });

    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}
