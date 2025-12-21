"use client";

import React from "react";
import ChangePassword from "./_components/ChangePassword";
import AccountVerification from "./_components/AccountVerification";
import Header from "./_components/Header";
import { useTranslations, useLocale } from "next-intl";

export default function Page() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar"; // لو العربية خلي الاتجاه يمين

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <div className="container py-8">
        {/* Page Title */}
        <div className="mb-6 mt-7">
          <Header />
        </div>

        <ChangePassword />
        <AccountVerification />

        {/* Delete Account */}
        <div
          className="
            p-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center
            sm:justify-between mt-6 rounded-xl border border-slate-100 bg-white shadow-sm
          "
        >
          <div className={`text-center sm:text-${isRTL ? "right" : "left"}`}>
            <h2 className="text-lg text-red-600">
              {t("delete_account")}
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              {t("delete_account_sub")}
            </p>
          </div>

          <button className="rounded-lg px-4 py-2 text-sm font-medium bg-red-500 text-white">
            {t("delete_account")}
          </button>
        </div>
      </div>
    </div>
  );
}
