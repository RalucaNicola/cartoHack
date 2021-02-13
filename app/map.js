var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Map"], function (require, exports, Map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = __importDefault(Map_1);
    const map = new Map_1.default({
        basemap: "satellite"
    });
    exports.default = map;
});
//# sourceMappingURL=map.js.map