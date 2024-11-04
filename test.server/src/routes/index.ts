import TaskRoute from './task.route';
import { Router } from 'express';

const routes = Router();

routes.use('/task', TaskRoute);

export default routes;