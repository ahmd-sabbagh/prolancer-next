import { useTranslations } from "next-intl";
import React from "react";

const AvailableMoney = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col">
      <h3 className="dark-color md:ms-10">{t("Available funds")}</h3>
      <div className="mt-4 bg-white rounded-sm p-4 md:py-9 md:px-10 border border-[#E4E5E7] flex flex-col justify-between grow">
        <div>
          <p className="text-[#62646A]">
            {t("The balance is available for use")}
          </p>
          <p className="dark-color text-2xl md:text-4xl mt-6">{"$0.00"}</p>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            className="py-2 px-6 rounded-xl bg-green-color text-white text-sm"
          >
            {t("Add money")}
          </button>
          <button type="button" className="dark-color text-xl underline">{t("Manage payment methods")}</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableMoney;
