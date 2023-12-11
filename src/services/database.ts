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

class Database {
  public permission = Permission;
  public userPermission = UserPermission;
  public user = User;
}

export default new Database();