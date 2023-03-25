import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorCycleODM';

export default class MotorCycleService {
  private createMotorCycleDomain(registeredMotorCycle: IMotorcycle | null): Motorcycle | null {
    if (registeredMotorCycle) return new Motorcycle(registeredMotorCycle);
    return null;
  }

  async create(payload: IMotorcycle) {
    const motorCycleODM = new MotorCycleODM();
    const newMotorcycle = await motorCycleODM.create(payload);
    return this.createMotorCycleDomain(newMotorcycle);
  }
}
