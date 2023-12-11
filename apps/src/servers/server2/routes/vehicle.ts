import { Router } from "express";
import validator from "../../../middlewares/validations/validator";

import * as schemas from "../middlewares/vehicle";
import VehicleController from "../controllers/vehicle";

const VehicleRouter = Router()
  .get("/", VehicleController.get)
  .get("/:vehicleId", validator(schemas.getById), VehicleController.getById);

export default VehicleRouter;