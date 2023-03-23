import ICar from '../Interfaces/ICar';

export default class Car {
  protected buyValue: number;
  protected color: string;
  private doorsQty: number;
  protected id: string;
  protected model: string;
  protected status: boolean;
  private seatsQty: number;
  protected year: number;

  constructor(car: ICar) {
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
