import { Request, Response, Router, NextFunction } from 'express';
import MotorCycleController from '../Controllers/MotorCycleController';

const routes = Router();

routes.get(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorCycleController(req, res, next).getAllMotos(),
);

routes.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorCycleController(req, res, next).getMotoById(),
);

routes.post(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorCycleController(req, res, next).registerMotorcycle(),
);

export default routes;
