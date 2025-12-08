import { useTranslations } from "next-intl";
import React from "react";

const Logout = () => {
  const t = useTranslations();
  return <button type="button" className="bg-[#E5322D1A] px-5 py-3 rounded-[100px] text-[#E5322D]">{t("logout")}</button>;
};

export default Logout;
