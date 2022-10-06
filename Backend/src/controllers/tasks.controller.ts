import { Request, Response } from 'express';
import BaseController from './_base.controller';
import moment from 'moment';

class TasksControler extends BaseController {
  public save = async (req: Request, res: Response) => {
    const data = {
      title: req.body.title,
      priorityColor: req.body.priorityColor,
      priority: req.body.priority,
      responsible_id: req.body.responsible_id
    };

    const tasks = await this.db.tasks.create({
      data
    });

    res.status(200).send(tasks);
  };

  public getAll = async (req: Request, res: Response) => {
    const tasks = await this.db.tasks.findMany({
      select: {
        id: true,
        title: true,
        priority: true,
        priorityColor: true,
        completed: true,
        created_at: true,
        description: true,
        responsible: {
          select: { first_name: true, last_name: true }
        },
        taskTag: {
          select: { tag: true }
        }
      },
      where: {
        deleted: false
      }
    });

    let tag = [];
    tasks.map(function (task) {
      tag = [];
      task.taskTag.map(function (taskTag) {
        tag.push(taskTag.tag);
      })
      task.tag = tag;
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

  public edit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      responsible_id: req.body.responsible_id
    }

    const tasks = await this.db.tasks.update({
      where: { id: parseInt(id) },
      data
    });

    await Promise.all(req.body.taskTag.map(async (tag: any) => {
      await this.db.tasksTags.update({
        where: { id: parseInt(tag.tag.id) },
        data: {
          deleted: true
        }
      });
    }));

    await Promise.all(req.body.tag.map(async (tag: any) => {
      await this.db.tasksTags.create({
        data: {
          task_id: parseInt(id),
          tag_id: tag.id
        }
      });
    }));

    res.status(200).send(tasks);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const tasks = await this.db.tasks.update({
      where: { id: parseInt(id) },
      data: { deleted: true }
    });

    if (req.body.length > 0) {
      await Promise.all(req.body.map(async (tag: any) => {
        await this.db.tasksTags.update({
          where: { id: parseInt(tag.tag.id) },
          data: {
            deleted: true
          }
        });
      }));
    }

    res.status(200).send(tasks);
  };
}

export default TasksControler;
