var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Basemap", "esri/Color", "esri/layers/CSVLayer", "esri/layers/Layer", "esri/Map", "esri/portal/PortalItem", "esri/renderers/UniqueValueRenderer", "esri/symbols/IconSymbol3DLayer", "esri/symbols/PointSymbol3D"], function (require, exports, Basemap_1, Color_1, CSVLayer_1, Layer_1, Map_1, PortalItem_1, UniqueValueRenderer_1, IconSymbol3DLayer_1, PointSymbol3D_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Basemap_1 = __importDefault(Basemap_1);
    Color_1 = __importDefault(Color_1);
    CSVLayer_1 = __importDefault(CSVLayer_1);
    Layer_1 = __importDefault(Layer_1);
    Map_1 = __importDefault(Map_1);
    PortalItem_1 = __importDefault(PortalItem_1);
    UniqueValueRenderer_1 = __importDefault(UniqueValueRenderer_1);
    IconSymbol3DLayer_1 = __importDefault(IconSymbol3DLayer_1);
    PointSymbol3D_1 = __importDefault(PointSymbol3D_1);
    const basemap = new Basemap_1.default();
    Layer_1.default.fromPortalItem({
        portalItem: new PortalItem_1.default({
            id: "a8588e0401e246469260f03ee44d69f1"
        })
    }).then(function (layer) {
        basemap.baseLayers.add(layer);
    });
    const map = new Map_1.default({
        basemap: basemap
    });
    function getSymbol(color) {
        return new PointSymbol3D_1.default({
            symbolLayers: [new IconSymbol3DLayer_1.default({
                    resource: { primitive: "circle" },
                    material: { color: color },
                    size: "5px"
                }), new IconSymbol3DLayer_1.default({
                    resource: { primitive: "circle" },
                    material: { color: [0, 0, 0, 0] },
                    outline: { color: color },
                    size: "15px"
                })]
        });
    }
    const csvLayer = new CSVLayer_1.default({
        url: "./data/whc-sites-2019.csv",
        renderer: new UniqueValueRenderer_1.default({
            field: "category",
            defaultSymbol: getSymbol(new Color_1.default([100, 100, 100])),
            uniqueValueInfos: [{
                    value: "Cultural",
                    symbol: getSymbol(new Color_1.default("#F5F49A")),
                    label: "Cultural"
                }, {
                    value: "Natural",
                    symbol: getSymbol(new Color_1.default("#69BFF5")),
                    label: "Natural"
                }, {
                    value: "Mixed",
                    symbol: getSymbol(new Color_1.default("#F58282")),
                    label: "Mixed"
                }]
        }),
        popupTemplate: {
            content: "{short_description_en}",
            title: "{name_en}"
        }
    });
    map.add(csvLayer);
    exports.default = map;
});
//# sourceMappingURL=map.js.map