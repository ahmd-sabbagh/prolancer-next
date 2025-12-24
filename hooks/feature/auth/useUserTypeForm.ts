"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setRegisterData } from "@/lib/store/features/auth/registerDraftSlice";
import { registerUser } from "@/lib/store/features/auth/registerSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { useAuth } from "@/app/context/AuthContext";

export const useUserTypeForm = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {setToken} = useAuth();

  const draft = useAppSelector((s) => s.registerDraft);
  const { loading } = useAppSelector((s) => s.register);

  const [userType, setUserType] = useState<string>("");

  const selectUserType = (type: string) => setUserType(type);

  const onSubmit = async () => {
    if (!draft.full_name || !draft.email || !draft.password || !draft.phone) {
      router.push("/register");
      return;
    }

    if (!userType) {
      return toast.warning(t("please_select_user_type"));
    }

    dispatch(setRegisterData({ user_type: userType }));

    const result = await dispatch(
      registerUser({
        full_name: draft.full_name,
        email: draft.email,
        password: draft.password,
        phone: draft.phone,
        user_type: userType,
      })
    );

    if (registerUser.fulfilled.match(result)) {
      const { user, token } = result.payload.data;

      setCookie("token", token, { maxAge: 60 * 60 * 24 * 7, path: "/" });
      setCookie("user", JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      setToken(token);
      toast.success(result.payload.message);
      router.replace("/");
    }
  };

  return {
    userType,
    selectUserType,
    onSubmit,
    loading,
    t,
  };
};
