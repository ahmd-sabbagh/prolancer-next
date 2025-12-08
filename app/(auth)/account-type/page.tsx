import { useTranslations } from "next-intl";
import React from "react";
import Form from "./Form";

const AccountType = () => {
  const t = useTranslations();
  return (
    <section className="min-h-screen flex-center bg-[#F7F8FA] px-4">
      <div className="relative z-20 bg-white px-8 md:px-14 pt-8 pb-14 max-w-[505px] rounded-[34px] grow box-shadow">
        <h3 className="text-center text-xl">{t("welcom_you_")}</h3>
        <h3 className="text-center text-xl">{t("welcom_you_sub")}</h3>
        <Form />
      </div>
    </section>
  );
};

export default AccountType;
