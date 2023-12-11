import { NextFunction, Request, Response } from "express";
import FoodService from "../services/food";

export default class FoodController {
  static async get(_req: Request, res: Response, next: NextFunction) {
    try {
      const foods = FoodService.get();
      res.send(foods);
    } catch (error) {
      next(error);
    }
  }
  
  static async getById(req: Request<{ foodId: number }>, res: Response, next: NextFunction) {
    try {
      const {
        params: { foodId },
      } = req;

      const foods = FoodService.getById(foodId);
      res.send(foods);
    } catch (error) {
      next(error);
    }
  }
}