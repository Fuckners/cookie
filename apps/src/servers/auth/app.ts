import express from "express";
import session from "express-session";
import { createClient } from "redis";
import RedisStore from "connect-redis";

import { app } from "./http";

import routes from "./routes";
import errorLogger from "../../middlewares/error/logger";
import errorHandler from "../../middlewares/error/handler";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, SESSION_SECRET } from "../../config";

const redisClient = createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  }
});
redisClient.connect()
  .then(() => console.log(redisClient.isReady))
  .catch(console.log);
  
redisClient.on("error", (err) => console.log("[AUTH]", err));

app
  .use(cors({
    origin: ['localhost'],
    credentials: true,
  }))
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
  .use("/", routes)
  .use(errorLogger)
  .use(errorHandler)