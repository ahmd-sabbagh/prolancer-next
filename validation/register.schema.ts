import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(5, "full_name_v"),
  email: z.email("email_v"),
  phone: z.string().min(10, "phone_v"),
  password: z
    .string()
    .min(8, "password_v"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;