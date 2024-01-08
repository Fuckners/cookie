import { NextFunction, Response } from "express";
import VehicleService from "../services/vehicle";
import { IRequest } from "../../../@types/express";

export default class VehicleController {
  static async get(_req: IRequest, res: Response, next: NextFunction) {
    try {
      const vehicles = await VehicleService.get();
      res.send(vehicles);
    } catch (error) {
      next(error);
    }
  }
  
  static async getById(req: IRequest<{ vehicleId: number }>, res: Response, next: NextFunction) {
    try {
      const {
        params: { vehicleId },
      } = req;

      const vehicles = await VehicleService.getById(vehicleId);
      res.send(vehicles);
    } catch (error) {
      next(error);
    }
  }
}