import { Router } from 'express';
import usersRoute from './users.route';
import tasksRoute from './tasks.route';
const mainRoute = Router();

mainRoute.use('/users', usersRoute);
mainRoute.use('/tasks', tasksRoute);

export default mainRoute;
