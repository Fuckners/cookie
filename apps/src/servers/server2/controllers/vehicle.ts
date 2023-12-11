import { NextFunction, Request, Response } from "express";
import VehicleService from "../services/vehicle";

export default class VehicleController {
  static async get(_req: Request, res: Response, next: NextFunction) {
    try {
      const vehicles = VehicleService.get();
      res.send(vehicles);
    } catch (error) {
      next(error);
    }
  }
  
  static async getById(req: Request<{ vehicleId: number }>, res: Response, next: NextFunction) {
    try {
      const {
        params: { vehicleId },
      } = req;

      const vehicles = VehicleService.getById(vehicleId);
      res.send(vehicles);
    } catch (error) {
      next(error);
    }
  }
}