export default abstract class Vehicle {
  protected buyValue: number;
  protected color: string;
  protected id: string;
  protected model: string;
  protected status: boolean;
  protected year: number;

  constructor(
    buyValue: number,
    color: string,
    id: string,
    model: string,
    status: boolean,
    year: number,
  ) {
    this.buyValue = buyValue;
    this.color = color;
    this.id = id;
    this.model = model;
    this.status = status;
    this.year = year;
  }
}
