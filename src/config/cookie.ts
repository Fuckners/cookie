import { CookieParseOptions } from "cookie-parser";

import * as config from ".";
import Keygrip from "keygrip";

export const secret = config.COOKIE_SECRET;

export const options: CookieParseOptions = { } as const;

export const sessionOptions: CookieSessionInterfaces.CookieSessionOptions = {
  name: "cookie",
  keys: Keygrip(["iCookies"]),
} as const;

const cookieConfig = { secret, options, sessionOptions };

export default cookieConfig;