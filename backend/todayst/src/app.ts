import morgan from 'morgan';
import express from 'express';
import taskRouter from './routes/task.router';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', taskRouter);

export default app;
