import { NextFunction, Response } from "express";
import FoodService from "../services/food";
import { IRequest } from "../../../@types/express";

export default class FoodController {
  static async get(_req: IRequest, res: Response, next: NextFunction) {
    try {
      const foods = await FoodService.get();
      res.send(foods);
    } catch (error) {
      next(error);
    }
  }
  
  static async getById(req: IRequest<{ foodId: number }>, res: Response, next: NextFunction) {
    try {
      const {
        params: { foodId },
      } = req;

      const foods = await FoodService.getById(foodId);
      res.send(foods);
    } catch (error) {
      next(error);
    }
  }
}