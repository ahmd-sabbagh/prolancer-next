"use client";

import Input from "../_components/Input";
import BtnSubmit from "../_components/BtnSubmit";
import { lock, mail, phone, user as uuser } from "@/assets";

import Link from "next/link";
import { useRegisterForm } from "@/hooks/feature/auth/useRegisterForm";

const Form = () => {

  const {
    register,
    handleSubmit,
    t,
    onSubmit,
    formState: { errors },
  } = useRegisterForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 flex flex-col gap-4"
    >
      <Input
        label
        type="text"
        placeholder={t("ful_name")}
        icon={uuser}
        {...register("fullName")}
        error={errors.fullName?.message}
      />

      <Input
        type="email"
        placeholder={t("email")}
        icon={mail}
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        type="tel"
        placeholder={t("phone")}
        icon={phone}
        {...register("phone")}
        error={errors.phone?.message}
      />

      <Input
        type="password"
        placeholder={t("password")}
        icon={lock}
        {...register("password")}
        error={errors.password?.message}
      />
      <BtnSubmit text={t("create_new_account")} />
      <div className="text-center mt-4 flex justify-center items-center gap-1">
        <span>{t("already_account")}</span>
        <Link href="/login" className="text-xs green-color ml-2">
          {t("login")}
        </Link>
      </div>
    </form>
  );
};

export default Form;
