import { Request, Response, NextFunction } from 'express';

export default class ErrorHandling {
  static handle(error: Error, _req: Request, res: Response, next: NextFunction) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
    next();
  }
}
