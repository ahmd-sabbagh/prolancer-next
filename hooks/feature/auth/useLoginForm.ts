"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { loginUser } from "@/lib/store/features/auth/loginSlice";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { getLoginSchema, LoginSchemaType } from "@/validation/loginSchema";
import { useAuth } from "@/app/context/AuthContext";

export const useLoginForm = () => {


  const t = useTranslations();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setToken } = useAuth();

  const { loading } = useAppSelector((state) => state.login);

  const loginSchema = getLoginSchema(t);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {

    try {
      const resultAction = await dispatch(loginUser(data));

      if (loginUser.fulfilled.match(resultAction)) {
        const { user, token } = resultAction.payload.data;

        setCookie("token", token, { maxAge: 60 * 60 * 24 * 7, path: "/" });
        setToken(token);
        setCookie("user", JSON.stringify(user), {
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });

        toast.success(resultAction.payload.message);

        router.replace("/");
      } else {
        // toast.error(resultAction.payload?.message || t("Invalid credentials"),{ id: "login-error" });
      }
    } catch (err) {
      toast.error(t("An unexpected error occurred"));
    }
  };

  return {
    ...form,
    onSubmit,
    loading,
    t,
  };
};
