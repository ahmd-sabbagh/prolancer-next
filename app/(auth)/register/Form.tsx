"use client";
import React from "react";
import Input from "../_components/Input";
import { useTranslations } from "next-intl";
import { lock, mail, phone, user } from "@/assets";
import BtnSubmit from "../_components/BtnSubmit";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Form = () => {
  const t = useTranslations();
  const router = useRouter()
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace("/account-type")
  };
  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
      <Input label type="text" placeholder={t("ful_name")} icon={user} />
      <Input type="email" placeholder={t("email")} icon={mail} />
      <Input type="tel" placeholder={t("phone")} icon={phone} />
      <Input type="password" placeholder={t("password")} icon={lock} />
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
