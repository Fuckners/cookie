import { Router } from "express";
import PermissionController from "../controllers/permission";

export default Router()
  .get("/", PermissionController.get)