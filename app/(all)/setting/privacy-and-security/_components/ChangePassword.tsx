"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";

export default function ChangePassword() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const getIconPosition = () => (isRTL ? "left-4" : "right-4");

  return (
    <>
      <div className="w-full mt-10">
        <div className="rounded-lg border border-slate-100 bg-white shadow-sm">
          <div className="px-6 py-6 sm:px-6 sm:py-6">
            <div className="mb-6">
              <h2 className="text-lg text-slate-900">{t("change_password")}</h2>
            </div>

            {/* Current */}
            <div className="mt-3">
              <p className="mb-3 text-sm font-medium text-slate-700">
                {t("current_password")}
              </p>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  className={`w-full rounded-lg !border !border-slate-200 bg-white py-2 pr-5 pl-12 text-slate-800 outline-none focus:border-slate-300 tracking-widest ${
                    isRTL ? "pr-12 pl-5 text-right" : "pl-12 pr-5 text-left"
                  }`}
                />
                {showCurrent ? (
                  <FiEyeOff
                    onClick={() => setShowCurrent(false)}
                    className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer ${getIconPosition()}`}
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowCurrent(true)}
                    className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer ${getIconPosition()}`}
                  />
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2">
              {/* New */}
              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">
                  {t("new_password")}
                </p>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    className={`w-full rounded-lg !border !border-slate-200 bg-white py-2 pr-5 pl-12 text-slate-800 outline-none focus:border-slate-300 tracking-widest ${
                      isRTL ? "pr-12 pl-5 text-right" : "pl-12 pr-5 text-left"
                    }`}
                  />
                  {showNew ? (
                    <FiEyeOff
                      onClick={() => setShowNew(false)}
                      className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer ${getIconPosition()}`}
                    />
                  ) : (
                    <FiEye
                      onClick={() => setShowNew(true)}
                      className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer ${getIconPosition()}`}
                    />
                  )}
                </div>
              </div>

              {/* Confirm */}
              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">
                  {t("confirm_new_password")}
                </p>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    className={`w-full rounded-lg !border !border-slate-200 bg-white py-2 pr-5 pl-12 text-slate-800 outline-none focus:border-slate-300 tracking-widest ${
                      isRTL ? "pr-12 pl-5 text-right" : "pl-12 pr-5 text-left"
                    }`}
                  />
                  {showConfirm ? (
                    <FiEyeOff
                      onClick={() => setShowConfirm(false)}
                      className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer ${getIconPosition()}`}
                    />
                  ) : (
                    <FiEye
                      onClick={() => setShowConfirm(true)}
                      className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer ${getIconPosition()}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-center sm:justify-end">
        <button className="rounded-lg px-4 py-2 text-sm font-medium bg-emerald-500 text-white">
          {t("change_password")}
        </button>
      </div>
    </>
  );
}
