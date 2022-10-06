import { Request, Response } from 'express';
import BaseController from './_base.controller';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

class UsersController extends BaseController {
  private saltRound = 10;
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

  public register = async (req: Request, res: Response) => {
    const { first_name, last_name, email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, this.saltRound);
    const token = moment() + '.' + crypto.randomBytes(15).toString('hex');
    const userData = {
      first_name,
      last_name,
      phone: phone || '',
      email,
      password: hashedPassword,
      token
    };
    const newUser = await this.db.users.create({
      data: userData
    });

    const userJwt = jwt.sign(newUser!, process.env.JWT_KEY!, {
      expiresIn: process.env.JWT_EXPIRATION_TIME!
    });

    res.status(200).send({ token: userJwt });
  }
}

export default UsersController;
