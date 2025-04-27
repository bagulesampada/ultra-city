
// Make buildings light up at night
function toggleBuildingLights() {
    const buildings = document.querySelectorAll('.building');
    buildings.forEach(building => {
        building.style.background = (new Date().getHours() >= 18 || new Date().getHours() <= 6) ? 'yellow' : 'grey';
    });
}
setInterval(toggleBuildingLights, 5000);

// Add simple smart streetlight effect
document.addEventListener('mousemove', function(e) {
    const city = document.getElementById('city');
    city.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,224,0.5), transparent 500px)`;
});
