const mapboxgl  =require("mapbox-gl")
const buildMarker =  require('./marker')


mapboxgl.accessToken = "pk.eyJ1Ijoid2FuZ2R6aSIsImEiOiJjanI4a3F0dmMwN3B1NDRydnE5N2Fscm84In0.9Tdv4bYU0qFnuzGacVaknQ"

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], //fullstack NY coordinnates,
    zoom: 12, //starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
    
})

 const marker = buildMarker("activities", [-72.009151, 40.705086]); // or [-87.6354, 41.8885]
 marker.addTo(map);
 