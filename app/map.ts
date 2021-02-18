import Basemap from "esri/Basemap";
import Color from "esri/Color";
import CSVLayer from "esri/layers/CSVLayer";
import Layer from "esri/layers/Layer";
import Map from "esri/Map";
import PortalItem from "esri/portal/PortalItem";
import SimpleRenderer from "esri/renderers/SimpleRenderer";
import UniqueValueRenderer from "esri/renderers/UniqueValueRenderer";
import IconSymbol3DLayer from "esri/symbols/IconSymbol3DLayer";
import PointSymbol3D from "esri/symbols/PointSymbol3D";


const basemap = new Basemap();

Layer.fromPortalItem({
  portalItem: new PortalItem({
    id: "a8588e0401e246469260f03ee44d69f1"
  })
  }).then(function(layer) {
    basemap.baseLayers.add(layer);
  });

const map = new Map({
  basemap: basemap
});

function getSymbol(color: Color) {
  return new PointSymbol3D({
    symbolLayers: [new IconSymbol3DLayer({
      resource: { primitive: "circle" },
      material: { color: color },
      size: "5px"
    }), new IconSymbol3DLayer({
      resource: { primitive: "circle" },
      material: { color: [0, 0, 0, 0] },
      outline: {color: color},
      size: "15px"
    })]
  });
}

const csvLayer = new CSVLayer({
  url: "./data/whc-sites-2019.csv",
  renderer: new UniqueValueRenderer({
    field: "category",
    defaultSymbol: getSymbol(new Color([100, 100, 100])),
    uniqueValueInfos: [{
      value: "Cultural",
      symbol: getSymbol(new Color("#F5F49A")),
      label: "Cultural"
    }, {
      value: "Natural",
      symbol: getSymbol(new Color("#69BFF5")),
      label: "Natural"
    }, {
      value: "Mixed",
      symbol: getSymbol(new Color("#F58282")),
      label: "Mixed"
    }]
  }),
  popupTemplate: {
    content: "{short_description_en}",
    title: "{name_en}"
  }
});

map.add(csvLayer);



export default map;