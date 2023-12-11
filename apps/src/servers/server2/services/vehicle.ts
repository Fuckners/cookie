import db from "../../../services/database"

export default class VehicleService {
  public static async get() {
    return db.vehicle.get();
  }

  public static async getById(id: number) {
    return db.vehicle.getById(id);
  }
}