"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">{t("page_not_found")}</h2>
      <p className="text-gray-400 mb-8">{t("no_page")}</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-green-color text-white hover:text-green-800 transition"
      >
        {t("go_home")}
      </Link>
    </div>
  );
}
