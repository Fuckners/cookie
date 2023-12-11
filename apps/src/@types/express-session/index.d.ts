import express, { Request } from 'express';
import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    user: {
      id: number;
      name: string;
    };
  }
}