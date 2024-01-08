import { Request } from "express";
import User from "../user";

export interface Data {
  user: User; 
}

type Session = Request["session"] & Partial<Data>;

export default Session;
