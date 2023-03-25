import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(registeredCar: ICar | null): Car | null {
    if (registeredCar) return new Car(registeredCar);
    return null;
  }

  async find() {
    const carODM = new CarODM();
    const carDocument = await carODM.find();
    return carDocument.map((car) => this.createCarDomain(car));
  }

  async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    return this.createCarDomain(car);
  }

  async create(payload: ICar) {
    const carODM = new CarODM();
    const registeredCar = await carODM.create(payload);
    return this.createCarDomain(registeredCar);
  }

  async updateOne(id: string, payload: ICar) {
    const carODM = new CarODM();
    const updatedCar = await carODM.updateOne(id, payload);
    return this.createCarDomain(updatedCar);
  }
}
