import map from "app/map";
import SceneView from "esri/views/SceneView";
import Legend from "esri/widgets/Legend";

const view = new SceneView({
  map,
  container: "viewDiv",
  popup: {
    defaultPopupTemplateEnabled: true
  },
  spatialReference: {
    wkid: 102100
  }
});

const legend = new Legend({
  view
});

view.ui.add(legend, "bottom-right");