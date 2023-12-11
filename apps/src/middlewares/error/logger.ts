import { NextFunction, Request, Response } from "express";

const errorLogger = (error: unknown, _req: Request, _res: Response, next: NextFunction) => {
  console.log(error);
  next(error);
}

export default errorLogger;