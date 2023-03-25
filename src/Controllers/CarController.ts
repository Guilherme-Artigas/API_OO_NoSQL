import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
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

  async getAllCars() {
    const listAllCars = await this.service.getAllCars();
    return this.res.status(200).json(listAllCars);
  }

  async getCarById() {
    try {
      isValidObjectId(this.req.params.id);
      const car = await this.service.getCarById(this.req.params.id);
      if (!car) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(car);
    } catch (e) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
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

  async updatedCarById() {
    try {
      const { params: { id }, body } = this.req;
      isValidObjectId(id);
      const carUpdated = await this.service.updateCarById(id, body);
      if (!carUpdated) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(carUpdated);
    } catch (e) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
