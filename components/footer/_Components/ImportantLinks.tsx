import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const ImportantLinks = () => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="green-color text-2xl">{t("important links")}</h3>

      <div className="flex items-center justify-between gap-4 mt-6">
        <ul className="flex flex-col gap-2">
          <Link href="/" className="text-white">
            {t("home")}
          </Link>
          <Link href="" className="text-white">
            {t("about_us")}
          </Link>
          <Link href="" className="text-white">
            {t("features")}
          </Link>
        </ul>

        <ul className="flex flex-col gap-2">
          <Link href="/" className="text-white">
            {t("contact")}
          </Link>
          <Link href="" className="text-white">
            {t("terms_and_conditions")}
          </Link>
          <Link href="" className="text-white">
            {t("privacy_policy")}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ImportantLinks;
