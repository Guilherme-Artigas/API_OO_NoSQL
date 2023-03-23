import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      buyValue: { type: Number, required: true },
      color: { type: String, required: true },
      doorsQty: { type: Number, required: true },
      model: { type: String, required: true },
      seatsQty: { type: Number, required: true },
      status: { type: Boolean },
      year: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}
