import { Request, Response } from 'express';
import BaseController from './_base.controller';
import moment from 'moment';

class TasksControler extends BaseController {
  public getAll = async (req: Request, res: Response) => {
    const tasks = await this.db.tasks.findMany({
      select: {
        id: true,
        title: true,
        priority: true,
        priorityColor: true,
        completed: true,
        created_at: true,
        taskTag: {
          select: { tag: true }
        }
      },
      where: {
        deleted: false
      }
    });

    tasks.map(function (task) {
      task.created_at = moment(task.created_at).format('YYYY-MM-DD');
    });

    return res.status(200).json({ tasks });
  };

  public updateCompleted = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = {
      completed: req.body.completed
    };
    const tasks = await this.db.tasks.update({
      where: { id: parseInt(id) },
      data
    });
    res.status(200).send(tasks);
  };
}

export default TasksControler;
