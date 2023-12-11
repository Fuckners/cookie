import { NextFunction, Request, Response } from "express";
import Service from "../services/permision";
import SessionService from "../../../services/session";

export default class PermissionController {
  static async get(req: Request, res: Response, next: NextFunction) {
    try {
   
      const user = SessionService.getUser(req.session);
      const permissions = Service.getByUser(user.id);

      res.send(permissions);
    } catch (error) {
      next(error);
    }
  }
}