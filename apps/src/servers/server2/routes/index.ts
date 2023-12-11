import { Router } from "express";
import VehicleRouter from "./vehicle";

export default Router()
  .use("/vehicle", VehicleRouter);