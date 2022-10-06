import { Request, Response } from 'express';
import BaseController from './_base.controller';
import jwt from 'jsonwebtoken';

class UsersController extends BaseController {
  public login = async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await this.db.users.findFirst({
      where: {
        email,
        deleted: false
      }
    });
    if (!user) {
      // throw new BadRequestError('User not found');
    }
    const userJwt = jwt.sign(user!, process.env.JWT_KEY!, {
      expiresIn: process.env.JWT_EXPIRATION_TIME!
    });
    res.status(200).send({ token: userJwt });
  };
}

export default UsersController;
