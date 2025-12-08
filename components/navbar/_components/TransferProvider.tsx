import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const TransferProvider = () => {
  const t = useTranslations();
  return <Link href={""} className="text-sm green-color hidden lg:block">{t("Transfer to a service provider")}</Link>;
};

export default TransferProvider;
