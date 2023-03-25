import Vehicle from './Vehicle';
import IMotorcycle, { Tcategory } from '../Interfaces/IMotorcycle';

export default class Motorcycle extends Vehicle {
  protected buyValue: number;
  protected color: string;
  private category: Tcategory;
  private engineCapacity: number;
  protected id: string;
  protected model: string;
  protected year: number;
  protected status: boolean;

  constructor(motocycle: IMotorcycle) {
    const { buyValue, color, id, model, status, year } = motocycle;
    super(buyValue, color, id as string, model, status as boolean, year);
    this.buyValue = motocycle.buyValue;
    this.color = motocycle.color;
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
    this.model = motocycle.model;
    this.year = motocycle.year;
    this.id = motocycle.id as string;
    this.status = motocycle.status as boolean;
  }
}
