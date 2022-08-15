import Vehicle, { VehicleProps } from "./vehicle";

export type AirVehicleProps = {
    maxAltitude: number;
}

class AirVehicle extends Vehicle {
    private maxAltitude: number;

    constructor ({maxAltitude}: AirVehicleProps, vehicleProps: VehicleProps) {
        super(vehicleProps);

        this.maxAltitude = maxAltitude;
    }

    public override toString = (): string => {
        return `${this.getString()}\tmax height: ${this.maxAltitude}`;
    };
}

export default AirVehicle;