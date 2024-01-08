import { NextFunction, Response } from "express";
import { IRequest } from "../../@types/express";

export default (req: IRequest, _res: Response, next: NextFunction) => {
  console.log(req.session);
  if (!req.session.user) throw new Error("user session not found");
  next();
}