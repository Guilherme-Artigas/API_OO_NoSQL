import IVehicle from './IVehicle';

export type Tcategory = 'Street' | 'Custom' | 'Trail';

export default interface IMotorcycle extends IVehicle {
  category: Tcategory;
  engineCapacity: number;
}
