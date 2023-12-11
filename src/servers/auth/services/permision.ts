import db from "../../../services/database";

export default class PermissionService {
  public static get() {
    const permissions = db.permission.get();
    return permissions;
  }

  public static getByUser(userId: number) {
    const usersPermissions = db.userPermission.get();

    const userPermissions = usersPermissions.filter(({ user_id }) => user_id === userId);

    return userPermissions
  }
}