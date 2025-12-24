import { z } from "zod";

export const getLoginSchema = (t: (key: string) => string) =>
  z.object({
    email: z.email({
      message: t("email_v"),
    }),
    password: z.string().min(8, {
      message: t("password_v"),
    }),
  });

export type LoginSchemaType = z.infer<ReturnType<typeof getLoginSchema>>;