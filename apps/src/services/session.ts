import { IRequest } from "../@types/express";

export default class SessionService {
  public static getUser(session: IRequest["session"]) {
    if (!session) throw new Error("session not found");
    if (!session.user) throw new Error("unauthorized");

    const { user } = session;

    return user as { id: number, name: string };
  }
}