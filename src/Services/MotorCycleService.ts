import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorCycleODM';

export default class MotorCycleService {
  private createMotorCycleDomain(registeredMotorCycle: IMotorcycle | null): Motorcycle | null {
    if (registeredMotorCycle) return new Motorcycle(registeredMotorCycle);
    return null;
  }

  async find() {
    const motorCycleODM = new MotorCycleODM();
    const motoDocument = await motorCycleODM.find();
    return motoDocument.map((moto) => this.createMotorCycleDomain(moto));
  }

  async findById(id: string) {
    const motorCycleODM = new MotorCycleODM();
    const moto = await motorCycleODM.findById(id);
    return this.createMotorCycleDomain(moto);
  }

  async create(payload: IMotorcycle) {
    const motorCycleODM = new MotorCycleODM();
    const newMotorcycle = await motorCycleODM.create(payload);
    return this.createMotorCycleDomain(newMotorcycle);
  }

  async updateOne(id: string, payload: IMotorcycle) {
    const motoCycleODM = new MotorCycleODM();
    const updatedMoto = await motoCycleODM.updateOne(id, payload);
    return this.createMotorCycleDomain(updatedMoto);
  }
}
