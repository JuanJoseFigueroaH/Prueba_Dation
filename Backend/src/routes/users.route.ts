import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const usersController = new UsersController();
const usersRoute = Router();

/**
 * @swagger
 * /users/login:
 *  post:
 *    description: Login user
 *    tags:
 *      - Users
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        required: true
 *        in: formData
 *        type: string
 */
usersRoute.post(
  '/login',
  /* usersValidator.login,
    usersValidator.validateIfUserExists,
    validateRequest, */
  usersController.login
);

/**
 * @swagger
 * /users/register:
 *  post:
 *    description: Register user
 *    tags:
 *      - Users
 *    produces:
 *      - application/json
 */
usersRoute.post(
  '/register',
  /* usersValidator.login,
    usersValidator.validateIfUserExists,
    validateRequest, */
  usersController.register
);

export default usersRoute;
