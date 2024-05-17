document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map and set its view to a default location and zoom level
    var map = L.map('map').setView([51.505, -0.09], 2);

    // Load and display tile layer on the map (OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Function to handle map click events
    function onMapClick(e) {
        var lat = e.latlng.lat;
        var lon = e.latlng.lng;

        // Calculate antipodal coordinates
        var antipodalLat = -lat;
        var antipodalLon = (lon > 0) ? lon - 180 : lon + 180;

        // Create a popup with the coordinates and antipodal coordinates
        var popupContent = `
            <b>Coordinates:</b><br>
            Latitude: ${lat}<br>
            Longitude: ${lon}<br><br>
            <b>Antipodal Coordinates:</b><br>
            Latitude: ${antipodalLat}<br>
            Longitude: ${antipodalLon}
        `;

        var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(popupContent)
            .openOn(map);
    }

    // Add a click event listener to the map
    map.on('click', onMapClick);
});