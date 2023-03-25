import Vehicle from './Vehicle';
import ICar from '../Interfaces/ICar';

export default class Car extends Vehicle {
  protected buyValue: number;
  protected color: string;
  private doorsQty: number;
  protected id: string;
  protected model: string;
  protected status: boolean;
  private seatsQty: number;
  protected year: number;

  constructor(car: ICar) {
    const { buyValue, color, id, model, status, year } = car;
    super(buyValue, color, id as string, model, status as boolean, year);
    this.buyValue = car.buyValue;
    this.color = car.color;
    this.doorsQty = car.doorsQty;
    this.model = car.model;
    this.seatsQty = car.seatsQty;
    this.year = car.year;
    this.id = car.id as string;
    this.status = car.status as boolean;
  }
}
