let propertyMap = null; // Global variable to track map instance

document.addEventListener('DOMContentLoaded', function() {
    // Initialize map only if it hasn't been initialized yet
    const mapContainer = document.getElementById('property-map');
    if (mapContainer && !propertyMap) {
        propertyMap = L.map('property-map').setView([19.0760, 72.8777], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(propertyMap);

        // Add marker for property location
        L.marker([19.0760, 72.8777])
            .addTo(propertyMap)
            .bindPopup('Luxury Villa')
            .openPopup();
    }
});

// Add resize handler to fix map display issues
window.addEventListener('resize', function() {
    if (propertyMap) {
        propertyMap.invalidateSize();
    }
});