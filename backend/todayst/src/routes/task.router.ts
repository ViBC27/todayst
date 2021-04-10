import { Router } from 'express';
import database from '../models/index';

const router = Router();

router.get('/tasks', async (request: Request, response: Response) => {
    const tasks = await database.task.findAll();
    return response.send(tasks);
});

router.post('/task', async (request: Request, response: Response) => {
    const task = await database.task.create(request.body);
    return response.send({ done: true });
});

router.put('/task/update/:id', async (request: Request, response: Response) => {
    const task = await database.task.update(request.body, { where: { id: request.params.id } });
    return response.send({ done: true });
});

router.delete('/task/delete/:id', async (request: Request, response: Response) => {
    const task = await database.task.destroy({ where: { id: request.params.id } });
    return response.send({ done: true });
});

export default router;
