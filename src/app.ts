import express from 'express';
import ErrorHandling from './Middlewares/ErrorHandling';
import CarRoutes from './Routes/CarRoutes';

const app = express();

app.use(express.json());

app.use('/cars', CarRoutes);

app.use(ErrorHandling.handle);

export default app;
