const mapboxgl  =require("mapbox-gl")

mapboxgl.accessToken = "pk.eyJ1Ijoid2FuZ2R6aSIsImEiOiJjanI4a3F0dmMwN3B1NDRydnE5N2Fscm84In0.9Tdv4bYU0qFnuzGacVaknQ"

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], //fullstack NY coordinnates,
    zoom: 12, //starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
    
})

const markerDomEl = document.createElement("div")
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl)
    .setLngLat([-74.009, 40.705])
    .addTo(map)