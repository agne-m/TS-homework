"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const landVehicle_1 = require("./landVehicle");
const airVehicle_1 = require("./airVehicle");
const waterVehicle_1 = require("./waterVehicle");
const vehicles = [
    new landVehicle_1.default({
        tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
    }, {
        brand: 'Toyota',
        model: 'Corola',
        year: 2005
    }),
    new landVehicle_1.default({
        tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
    }, {
        brand: 'Nisan',
        model: 'Qashqai',
        year: 2007,
    }),
    new airVehicle_1.default({
        maxAltitude: 7000,
    }, {
        brand: 'Jeti',
        model: 'Nitro',
        year: 2015,
    }),
    new airVehicle_1.default({
        maxAltitude: 5000,
    }, {
        brand: 'Falcon',
        model: 'Bamasi',
        year: 2012,
    }),
    new waterVehicle_1.default({
        maxDepth: 50,
    }, {
        brand: 'Sailor',
        model: 'Ocean 3000',
        year: 2011,
    }),
    new waterVehicle_1.default({
        maxDepth: 70,
    }, {
        brand: 'LandScraper',
        model: 'Fagotti',
        year: 202,
    }),
];
vehicles.forEach(vehicle => console.log(vehicle.toString()));
//# sourceMappingURL=main.js.map