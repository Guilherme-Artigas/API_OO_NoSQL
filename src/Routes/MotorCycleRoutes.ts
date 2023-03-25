import { Request, Response, Router, NextFunction } from 'express';
import MotorCycleController from '../Controllers/MotorCycleController';

const routes = Router();

routes.post(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorCycleController(req, res, next).registerMotorcycle(),
);

export default routes;
