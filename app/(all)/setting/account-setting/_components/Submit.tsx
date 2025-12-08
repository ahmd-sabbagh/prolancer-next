"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Submit = () => {
  const t = useTranslations();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="flex items-center justify-between">
      <h2 className="text-2xl md:text-3xl dark-color">
        {t("account setting")}
      </h2>
      <button
        type="submit"
        className="bg-green-color py-2 px-6 text-white text-sm rounded-xl"
      >
        {t("save_edits")}
      </button>
    </form>
  );
};

export default Submit;
