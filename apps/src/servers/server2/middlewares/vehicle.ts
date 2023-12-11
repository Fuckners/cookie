import { z } from "zod";

export const getById = z.object({
  params: z.object({
    vehicleId: z.preprocess(Number, z.number().int().positive()),
  }),
});