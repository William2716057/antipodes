document.addEventListener('DOMContentLoaded', function () {

    var map = L.map('map').setView([51.505, -0.09], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function onMapClick(e) {
        var lat = e.latlng.lat;
        var lon = e.latlng.lng;

        var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(`<b>Coordinates:</b><br>Latitude: ${lat}<br>Longitude: ${lon}`)
            .openOn(map);
    }

    // Add a click event listener to the map
    map.on('click', onMapClick);
});