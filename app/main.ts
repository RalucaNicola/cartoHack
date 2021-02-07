import Map from "esri/Map";
import MapView from "esri/views/MapView";

const map = new Map({
  basemap: "satellite"
});
const view = new MapView({
  map,
  container: "viewDiv"
});
