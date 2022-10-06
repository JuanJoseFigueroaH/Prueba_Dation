import { Router } from 'express';
import TasksController from '../controllers/tasks.controller';

const tasksController = new TasksController();
const tasksRoute = Router();

/**
 * @swagger
 * /tasks/getAll:
 *   get:
 *     description:
 *       "Get all tasks"
 *     tags:
 *       - Tasks
 */
tasksRoute.get(
  '/getAll',
  tasksController.getAll
);

/**
 * @swagger
 * /tasks/updateCompleted/{id}:
 *   put:
 *     description:
 *       "Modify Completed Tasks"
 *     tags:
 *       - Tasks
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          type: number
 *        - name: completed
 *          in: formData
 *          type: string
 *          example: true
 */
tasksRoute.put(
  '/updateCompleted/:id',
  tasksController.updateCompleted
);

export default tasksRoute;
