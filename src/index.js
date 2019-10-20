const mapboxgl  =require("mapbox-gl")

mapboxgl.accessToken = "your api token here"

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], //fullstack NY coordinnates,
    zoom: 12, //starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
    
})