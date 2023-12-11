import { Router } from "express";
import foodRouter from "./food";

export default Router()
  .use("/food", foodRouter);