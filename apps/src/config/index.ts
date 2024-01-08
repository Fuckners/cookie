import z from "zod";
import "dotenv/config";

const requiredError = (key: string) => ({ required_error: `${key} is required.` });

const envSchema = z.object({
  COOKIE_SECRET: z.string(requiredError("COOKIE_SECRET")).min(10),
  SESSION_SECRET: z.string(requiredError("SESSION_SECRET")).min(10),
  REDIS_PASSWORD: z.string(requiredError("REDIS_PASSWORD")).min(8),
});

const {
  COOKIE_SECRET,
  SESSION_SECRET,
  REDIS_PASSWORD,
} = envSchema.parse(process.env);

export {
  COOKIE_SECRET,
  SESSION_SECRET,
  REDIS_PASSWORD,
};