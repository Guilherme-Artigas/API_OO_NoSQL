import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleService from '../Services/MotorCycleService';

export default class MotorCycleController {
  readonly req: Request;
  private res: Response;
  readonly next: NextFunction;
  private service: MotorCycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorCycleService();
  }

  async registerMotorcycle() {
    const payload: IMotorcycle = {
      buyValue: this.req.body.buyValue,
      color: this.req.body.color,
      engineCapacity: this.req.body.engineCapacity,
      model: this.req.body.model,
      category: this.req.body.category,
      status: this.req.body.status || false,
      year: this.req.body.year,
    };

    try {
      const newMotorcycle = await this.service.create(payload);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}