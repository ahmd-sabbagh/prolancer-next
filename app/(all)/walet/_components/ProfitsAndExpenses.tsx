import { useTranslations } from "next-intl";
import React from "react";

const ProfitsAndExpenses = () => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="dark-color md:ms-10">{t("Profits and expenses")}</h3>
      <div className="mt-4 bg-white rounded-sm p-4 md:py-9 md:px-10 border border-[#E4E5E7] flex flex-col justify-between">
        <div className="pb-6 border-b border-[#E4E5E7]">
          <p className="text-[#62646A]">
            {t("expenses so far")}
          </p>
          <p className="dark-color md:text-2xl mt-6">{"$0.00"}</p>
          <p className="text-[#62646A] mt-2 text-sm">
            {t("Expenses since you joined")}
          </p>
        </div>

        <div className="pt-6">
          <p className="text-[#62646A]">
            {t("Reserved expenses")}
          </p>
          <p className="dark-color md:text-2xl mt-6">{"$0.00"}</p>
          <p className="text-[#62646A] mt-2 text-sm">
            {t("Expenses reserved for ongoing projects")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitsAndExpenses;
