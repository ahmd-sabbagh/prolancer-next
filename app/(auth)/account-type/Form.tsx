"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import BtnSubmit from "../_components/BtnSubmit";
import { useRouter } from "next/navigation";

const Form = () => {
  const t = useTranslations();
  const router = useRouter();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace("/interests");
  };
  const [state, setState] = useState("");
  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
      <button
        type="button"
        className={cn(
          "rounded-xl py-5 px-6 border text-start",
          state === "provider"
            ? "border-[#1DBF73] green-color bg-[#1DBF731A]"
            : "border-[#DDDFDF]"
        )}
        onClick={() => setState("provider")}
      >
        {t("Service provider")}
      </button>
      <button
        type="button"
        className={cn(
          "rounded-xl py-5 px-6 border text-start",
          state === "postulant"
            ? "border-[#1DBF73] green-color bg-[#1DBF731A]"
            : "border-[#DDDFDF]"
        )}
        onClick={() => setState("postulant")}
      >
        {t("postulant")}
      </button>
      <p className="text-[#3F434A] text-sm mt-2">
        {
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص."
        }
      </p>
      <BtnSubmit text={t("next")} className="mt-3.5" />
    </form>
  );
};

export default Form;
