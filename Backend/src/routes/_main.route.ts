import { Router } from 'express';
import usersRoute from './users.route';
import tasksRoute from './tasks.route';
import tagsRoute from './tags.route';
const mainRoute = Router();

mainRoute.use('/users', usersRoute);
mainRoute.use('/tasks', tasksRoute);
mainRoute.use('/tags', tagsRoute);

export default mainRoute;
