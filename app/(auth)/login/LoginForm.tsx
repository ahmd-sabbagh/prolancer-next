"use client";
import Input from "../_components/Input";
import { lock, mail } from "@/assets";
import Link from "next/link";
import BtnSubmit from "../_components/BtnSubmit";
import { useLoginForm } from "@/hooks/feature/auth/useLoginForm";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    loading,
    t,
  } = useLoginForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex flex-col gap-5"
    >
      <Input
        type="email"
        placeholder={t("email")}
        {...register("email")}
        error={errors.email?.message}
        icon={mail}
      />
      <Input
        type="password"
        placeholder={t("password")}
        {...register("password")}
        error={errors.password?.message}
        icon={lock}
      />
      <Link href="/recovery-password" className="text-xs green-color">
        {t("forget")}
      </Link>
      <BtnSubmit text={t("log_in")} loading={loading} />
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
