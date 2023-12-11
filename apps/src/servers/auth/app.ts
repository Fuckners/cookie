import express from "express";
// import cookieParser from "cookie-parser";
// import cookieSession from "cookie-session";
import session from "express-session";
import { createClient } from "redis";
import RedisStore from "connect-redis";

import { app } from "./http";

import routes from "./routes";
// import cookieConfig from "../../config/cookie";
import errorLogger from "../../middlewares/error/logger";
import errorHandler from "../../middlewares/error/handler";
import { SESSION_SECRET } from "../../config";
// import { SESSION_SECRET } from "../../config";

const redisClient = createClient();
redisClient.connect().catch(console.log);
console.log(redisClient.isReady)

app
  .use(session({
    name: "auth",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
      client: redisClient,
    }),
  }))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  // .use(cookieParser(cookieConfig.secret, cookieConfig.options))
  // .use(cookieSession(cookieConfig.sessionOptions))
  .use("/", routes)
  .use(errorLogger)
  .use(errorHandler)