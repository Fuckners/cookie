import Service from "../services/permision";
import SessionService from "../../../services/session";
import { IRequest } from "../../../@types/express";
import { NextFunction, Response } from "express";

export default class PermissionController {
  static async get(req: IRequest, res: Response, next: NextFunction) {
    try {
      const user = SessionService.getUser(req.session);
      const permissions = Service.getByUser(user.id);

      res.send(permissions);
    } catch (error) {
      next(error);
    }
  }
}