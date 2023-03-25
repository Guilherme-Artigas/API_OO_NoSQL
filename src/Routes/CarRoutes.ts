import { Request, Response, Router, NextFunction } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).getAllCars(),
);

routes.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).getCarById(),
);

routes.post(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).registerCar(),
);

routes.put(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).updatedCarById(),
);

export default routes;
