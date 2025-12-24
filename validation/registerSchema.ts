import { z } from "zod";

export const getPhoneSchema = (t: (key: string) => string) =>
  z.object({
    fullName: z.string().min(5, {
      message: t("full_name_v"),
    }),
    email: z.email({
      message: t("email_v"),
    }),
    phone: z.string().max(10, {
      message: t("phone_v"),
    }),
    password: z.string().min(8, {
      message: t("password_v"),
    }),
  });

export type RegisterSchemaType = z.infer<ReturnType<typeof getPhoneSchema>>;
