import db from "../../../services/database"

export default class FoodService {
  public static async get() {
    return db.food.get();
  }

  public static async getById(id: number) {
    return db.food.getById(id);
  }
}