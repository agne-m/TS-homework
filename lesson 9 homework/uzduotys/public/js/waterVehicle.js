"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = require("./vehicle");
class WaterVehicle extends vehicle_1.default {
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tmax depth: ${this.maxDepth}`;
        };
        this.maxDepth = maxDepth;
    }
}
exports.default = WaterVehicle;
//# sourceMappingURL=waterVehicle.js.map