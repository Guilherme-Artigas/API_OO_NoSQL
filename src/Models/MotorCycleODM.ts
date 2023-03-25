import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorCycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      buyValue: { type: Number, required: true },
      color: { type: String, required: true },
      category: { type: String, required: true },
      model: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      status: { type: Boolean },
      year: { type: Number, required: true },
    });
    super(schema, 'motorcycle');
  }
}
