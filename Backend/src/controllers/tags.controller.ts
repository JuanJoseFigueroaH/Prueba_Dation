import { Request, Response } from 'express';
import BaseController from './_base.controller';

class TagsController extends BaseController {
  public getAll = async (req: Request, res: Response) => {
    const tags = await this.db.tags.findMany({
      where: {
        deleted: false
      }
    });

    return res.status(200).json({ tags });
  };
}

export default TagsController;
