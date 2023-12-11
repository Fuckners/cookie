import db from "../../../services/database";

export default class AuthService {
  static login(name: string, password: string) {
    const user = db.user.getByName(name);

    if (!user) throw new Error("user not found.");

    const { password: _, ...safeUser } = user;

    return user.password === password ? safeUser : null;
  }
}