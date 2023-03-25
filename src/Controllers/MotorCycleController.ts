import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
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

  async getAllMotos() {
    const listAllMotos = await this.service.find();
    return this.res.status(200).json(listAllMotos);
  }

  async getMotoById() {
    try {
      isValidObjectId(this.req.params.id);
      const moto = await this.service.findById(this.req.params.id);
      if (!moto) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(moto);
    } catch (e) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
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

  async updateMotoById() {
    try {
      const { params: { id }, body } = this.req;
      isValidObjectId(id);
      const motoUpdated = await this.service.updateOne(id, body);
      if (!motoUpdated) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motoUpdated);
    } catch (e) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
