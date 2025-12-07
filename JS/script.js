document.addEventListener("DOMContentLoaded", () => {
  const deurne = [51.219, 4.468];

  const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
    touchZoom: false
  }).setView(deurne, 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap-bijdragers'
  }).addTo(map);

  L.marker(deurne)
    .addTo(map)
    .bindPopup("Deurne, Antwerpen")
    .openPopup();
});
