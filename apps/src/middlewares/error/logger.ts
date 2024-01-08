import { NextFunction, Response } from "express";
import { IRequest } from "../../@types/express";

const errorLogger = (error: unknown, _req: IRequest, _res: Response, next: NextFunction) => {
  console.log(error);
  next(error);
}

export default errorLogger;