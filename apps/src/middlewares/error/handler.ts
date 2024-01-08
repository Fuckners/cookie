import { NextFunction, Response } from "express";
import AuthorizationError from "../../models/error/Authorization";
import { IRequest } from "../../@types/express";

const errorHandler = (error: unknown, _req: IRequest, res: Response, _next: NextFunction) => {
  if (error instanceof AuthorizationError) {
    // if (req.session) req.session.user = null;
    res.status(401).send("unauthorized");
    return;
  }

  res.status(500).send("internal server error");
}

export default errorHandler;