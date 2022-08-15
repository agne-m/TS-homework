"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = require("./vehicle");
class LandVehicle extends vehicle_1.default {
    constructor({ tires }, VehicleProps) {
        super(VehicleProps);
        this.toString = () => {
            return `${this.getString()}\tires: ${this.tires.join(', ')}`;
        };
        this.tires = tires;
    }
}
exports.default = LandVehicle;
//# sourceMappingURL=landVehicle.js.map