import express, { Request } from "express";
import User from "../user";
import Session from "../session";

declare module "express-serve-static-core" {
  interface Request {
    user: User;
  };
}

export interface IRequest<
  Params = Request["params"],
  ResBody = any,
  ReqBody = {},
  Query = qs.ParsedQs,
  Locals extends Record<string, unknown> = Record<string, unknown>
> extends Request<Params, ResBody, ReqBody, Query, Locals> {
  session: Session;
  user: User;
}