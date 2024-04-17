import { z } from "zod";

export const resgisterSchema = z.object({
  username: z.string({
    required_error: "Nombre de usuario es necesario",
  }),
  email: z
    .string({
      required_error: "Correo requerido",
    })
    .email({
      message: "Esto no es un correo válido",
    }),
  password: z
    .string({
      required_error: "Contraseña necesaria",
    })
    .min(6, {
      message: "Mínimo 6 caracteres",
    }),
});

export const loginScehma = z.object({
  email: z
    .string({
      required_error: "Correo necesario",
    })
    .email({
      message: "Correo inválido",
    }),
  password: z
    .string({
      required_error: "Contraseña necesaria",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});
