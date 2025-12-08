"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Input from "../_components/Input";
import BtnSubmit from "../_components/BtnSubmit";
import { mail } from "@/assets";
import { useRouter } from "next/navigation";

const Form = () => {
  const t = useTranslations();
  const router = useRouter()
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace("/verify")
  };
  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
      <Input type="email" placeholder={t("email")} icon={mail} />
      <BtnSubmit text={t("recovery_password")} className="mt-3.5" />
    </form>
  );
};

export default Form;
