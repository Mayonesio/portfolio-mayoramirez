import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Titulo necesario",
  }),
  description: z.string({
    required_error: "Descripcion deberia contener algo",
  }),
  date: z.string().datetime().optional(),
});
