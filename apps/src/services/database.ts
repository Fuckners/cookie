import db from "../../db.json";

class Permission {
  static get() {
    return db.permission;
  }

  static getById(id: number) {
    return db.permission.find((permission) => permission.id === id);
  }
}

class UserPermission {
  static get() {
    return db.user_permission.map(({ user_id, permission_id }) => ({
      user_id,
      permission: Permission.getById(permission_id),
    }));
  }
}

class User {
  static get() {
    return db.user;
  }
  
  static getByName(name: string) {
    return db.user.find((user) => user.name === name);
  }
}

class Food {
  static get() {
    return db.food;
  }

  static getById(id: number) {
    return db.food.find((food) => food.id === id);
  }
}

class Vehicle {
  static get() {
    return db.vehicles;
  }
  
  static getById(id: number) {
    return db.vehicles.find((vehicle) => vehicle.id === id);
  }
}

class Database {
  public permission = Permission;
  public userPermission = UserPermission;
  public user = User;
  public food = Food;
  public vehicle = Vehicle;
}

export default new Database();