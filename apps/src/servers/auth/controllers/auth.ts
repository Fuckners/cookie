import { NextFunction, Response } from "express";
import Service from "../services/auth";
import UnauthorizedError from "../../../models/error/Unauthorized";
import { IRequest } from "../../../@types/express";

type Login = IRequest<unknown, unknown, { name: string, password: string }>;

export default class AuthController {
  static login(req: Login, res: Response, next: NextFunction) {
    try {
      if (!req.session) throw new Error("Session not found");
      
      const {
        body: { name, password },
      } = req;
      
      const user = Service.login(name, password);

      if (!user) throw new UnauthorizedError();

      req.session.user = user;
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}