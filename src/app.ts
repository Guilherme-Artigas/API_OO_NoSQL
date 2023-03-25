import express from 'express';
import ErrorHandling from './Middlewares/ErrorHandling';
import CarRoutes from './Routes/CarRoutes';
import MotorCycleRoutes from './Routes/MotorCycleRoutes';

const app = express();

app.use(express.json());

app.use('/cars', CarRoutes);

app.use('/motorcycles', MotorCycleRoutes);

app.use(ErrorHandling.handle);

export default app;
