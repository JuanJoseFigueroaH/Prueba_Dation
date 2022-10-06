import { Router } from 'express';
import TagsController from '../controllers/tags.controller';

const tagsController = new TagsController();
const tagsRoute = Router();

/**
 * @swagger
 * /tags/getAll:
 *   get:
 *     description:
 *       "Get all tags"
 *     tags:
 *       - Tags
 */
tagsRoute.get(
  '/getAll',
  tagsController.getAll
);

export default tagsRoute;
