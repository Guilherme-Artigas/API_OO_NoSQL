import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(registeredCar: ICar | null): Car | null {
    if (registeredCar) return new Car(registeredCar);
    return null;
  }

  async getAllCars() {
    const carODM = new CarODM();
    const carDocument = await carODM.getAllCars();
    return carDocument.map((car) => this.createCarDomain(car));
  }

  async getCarById(id: string) {
    if (!isValidObjectId) return 'Invalid mongo id';
    const carODM = new CarODM();
    const car = await carODM.getCarById(id);
    return this.createCarDomain(car);
  }

  async registerCar(payload: ICar) {
    const carODM = new CarODM();
    const registeredCar = await carODM.registerCar(payload);
    return this.createCarDomain(registeredCar);
  }
}
