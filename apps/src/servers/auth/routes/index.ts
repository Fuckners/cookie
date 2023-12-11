import { Router } from "express";
import PermissionRouter from "./permission";
import AuthRouter from "./auth";

export default Router()
  .use("/auth", AuthRouter)
  .use("/permission", PermissionRouter)