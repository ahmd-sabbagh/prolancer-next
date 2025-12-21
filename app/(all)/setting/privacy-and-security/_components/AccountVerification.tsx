"use client";
import React from "react";
import { FiCheck, FiMail } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function AccountVerification() {
  const t = useTranslations();

  return (
    <>
      {/* AccountVerification */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-white shadow-sm">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg text-slate-900">
              {t("account_verification")}
            </h2>
            <span />
          </div>

          {/* verified row */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between rounded-lg bg-emerald-50 px-5 py-4">
            <div className="flex items-center gap-3 text-slate-700 sm:justify-start">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <FiMail className="h-4.5 w-4.5" />
              </span>

              <div className="">
                <div className="text-sm font-medium">{t("email")}</div>
                <div className="text-xs text-slate-500">
                  hi.mo@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-emerald-600">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <FiCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-medium">{t("verified")}</span>
            </div>
          </div>

          {/* pending row */}
          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between rounded-lg bg-amber-50 px-5 py-4">
            <div className="flex items-center gap-3 text-slate-700">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <FiMail className="h-4.5 w-4.5" />
              </span>

              <div className="">
                <div className="text-sm font-medium">{t("email")}</div>
                <div className="text-xs text-slate-500">
                  hi.mo@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-amber-600">
              <span className="text-sm font-medium">{t("start_verification")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
