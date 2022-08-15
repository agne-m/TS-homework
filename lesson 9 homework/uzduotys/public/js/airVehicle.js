"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = require("./vehicle");
class AirVehicle extends vehicle_1.default {
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tmax height: ${this.maxAltitude}`;
        };
        this.maxAltitude = maxAltitude;
    }
}
exports.default = AirVehicle;
//# sourceMappingURL=airVehicle.js.map