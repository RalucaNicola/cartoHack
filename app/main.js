var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "app/map", "esri/views/MapView"], function (require, exports, map_1, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    map_1 = __importDefault(map_1);
    MapView_1 = __importDefault(MapView_1);
    const view = new MapView_1.default({
        map: map_1.default,
        container: "viewDiv"
    });
});
//# sourceMappingURL=main.js.map