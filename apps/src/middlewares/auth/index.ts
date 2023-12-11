import { NextFunction, Request, Response } from "express";

export default (req: Request, _res: Response, next: NextFunction) => {
  if (!req.session.user) throw new Error("user session not found");
  console.log(req.session);
  next();
}