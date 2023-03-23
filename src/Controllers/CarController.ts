import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  readonly next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async registerCar() {
    const newCarRegistration: ICar = {
      buyValue: this.req.body.buyValue,
      color: this.req.body.color,
      doorsQty: this.req.body.doorsQty,
      model: this.req.body.model,
      seatsQty: this.req.body.seatsQty,
      status: this.req.body.status || false,
      year: this.req.body.year,
    };

    try {
      const registration = await this.service.registerCar(newCarRegistration);
      return this.res.status(201).json(registration);
    } catch (error) {
      this.next(error);
    }
  }
}
