"use client";

import { useTranslations } from "next-intl";
import Input from "../_components/Input";
import { lock, mail } from "@/assets";
import Link from "next/link";
import BtnSubmit from "../_components/BtnSubmit";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { login } from "@/lib/store/slices/authSlice";

const LoginForm = () => {
  const t = useTranslations();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login());
    router.replace("/");
  };
  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
      <Input type="email" placeholder={t("email")} label icon={mail} />
      <Input type="password" placeholder={t("password")} icon={lock} />
      <Link href="/recovery-password" className="text-xs green-color">
        {t("forget")}
      </Link>
      <BtnSubmit text={t("log_in")} />
      <div className="text-center mt-4 flex justify-center items-center gap-1">
        <span>{t("dont_have_account")}</span>
        <Link href="/register" className="text-xs green-color ml-2">
          {t("craete_account")}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
