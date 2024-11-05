import TaskRoute from './task.route';
import UserRoute from './ususarios.route';
import { Router } from 'express';

const routes = Router();

routes.use('/task', TaskRoute)
routes.use('/users', UserRoute);

export default routes;