"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Input from "../basicInfo/_components/Input";
import Dropdown from "@/components/dropdown/Dropdown";

const Adress = () => {
  const t = useTranslations();
  return (
    <div className="p-4 md:p-8 bg-white rounded-xl mt-5 md:mt-7.5">
      <h3 className="md:text-xl dark-color">{t("the address")}</h3>
      <div className="mt-5">
        <Input label={t("adress details")} id="adress" type="text" />
        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <Dropdown
            options={["Egypt", "Saudi Arabia", "USA"]}
            placeholder={t("State")}
            onSelect={(v) => console.log("Selected:", v)}
          />
          <Dropdown
            options={["Egypt", "Saudi Arabia", "USA"]}
            placeholder={t("The neighborhood")}
            onSelect={(v) => console.log("Selected:", v)}
          />
        </div>
      </div>
    </div>
  );
};

export default Adress;
