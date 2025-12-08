"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Input from "../_components/Input";
import { lock } from "@/assets";
import BtnSubmit from "../_components/BtnSubmit";
import { useRouter } from "next/navigation";

const Form = () => {
  const t = useTranslations();
  const router = useRouter()
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace("/")
  };
  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
      <Input type="password" placeholder={t("password")} icon={lock} />
      <Input type="password" placeholder={t("confirm_password")} icon={lock} />
      <BtnSubmit text={t("create_password")} className="mt-3.5" />
    </form>
  );
};

export default Form;
