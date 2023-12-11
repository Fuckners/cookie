import { z } from "zod";

export const getById = z.object({
  params: z.object({
    foodId: z.preprocess(Number, z.number().int().positive()),
  }),
});