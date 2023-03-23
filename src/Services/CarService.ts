import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(registeredCar: ICar | null): Car | null {
    if (registeredCar) return new Car(registeredCar);
    return null;
  }

  async registerCar(payload: ICar) {
    const carODM = new CarODM();
    const registeredCar = await carODM.registerCar(payload);
    return this.createCarDomain(registeredCar);
  }
}
