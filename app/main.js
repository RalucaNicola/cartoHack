var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "app/map", "esri/views/SceneView", "esri/widgets/Legend"], function (require, exports, map_1, SceneView_1, Legend_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    map_1 = __importDefault(map_1);
    SceneView_1 = __importDefault(SceneView_1);
    Legend_1 = __importDefault(Legend_1);
    const view = new SceneView_1.default({
        map: map_1.default,
        container: "viewDiv",
        popup: {
            defaultPopupTemplateEnabled: true
        },
        spatialReference: {
            wkid: 102100
        }
    });
    const legend = new Legend_1.default({
        view
    });
    view.ui.add(legend, "bottom-right");
});
//# sourceMappingURL=main.js.map