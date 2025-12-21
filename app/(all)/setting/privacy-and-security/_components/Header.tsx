"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();

  return (
    <h2 className="text-2xl md:text-3xl dark-color">
      {t("privacy_and_security")}

    </h2>
  );
};

export default Header;
