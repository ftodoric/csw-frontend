import { z } from "zod";

export const registrationFormSchema = z
  .object({
    username: z
      .string()
      .min(2, "Username must contain at least 2 characters.")
      .max(20),
    password: z
      .string()
      .min(2, "Password must contain at least 2 characters.")
      .max(32),
    confirmPassword: z.string().min(2, "Confirm the password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not confirmed correctly.",
    path: ["confirmPassword"],
  });

export type RegisterFormInputs = z.infer<typeof registrationFormSchema>;
