import express from "express";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";

import { app } from "./http";

import routes from "../auth/routes";
import cookieConfig from "../../config/cookie";
import errorLogger from "../../middlewares/error/logger";
import errorHandler from "../../middlewares/error/handler";

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cookieParser(cookieConfig.secret, cookieConfig.options))
  .use(cookieSession(cookieConfig.sessionOptions))
  .use("/", routes)
  .use(errorLogger)
  .use(errorHandler)