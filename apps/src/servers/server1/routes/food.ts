import { Router } from "express";
import validator from "../../../middlewares/validations/validator";

import * as schemas from "../middlewares/food";
import foodController from "../controllers/food";

const foodRouter = Router()
  .get("/", foodController.get)
  .get("/:foodId", validator(schemas.getById), foodController.getById);

export default foodRouter;