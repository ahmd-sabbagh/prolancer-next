import { useTranslations } from "next-intl";
import React from "react";

const Title = () => {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl dark-color md:text-2xl">{t("walet")}</h2>
      <button
        type="button"
        className="py-2 px-6 rounded-xl bg-green-color text-white text-sm"
      >
        {t("Add money")}
      </button>
    </div>
  );
};

export default Title;
