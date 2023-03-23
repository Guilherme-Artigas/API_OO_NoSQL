import { Request, Response, Router, NextFunction } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).registerCar(),
);

export default routes;
