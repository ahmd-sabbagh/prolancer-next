"use client";

import React from "react";
import { useTranslations } from "next-intl";

interface WithdrawRequestsProps {
  amount?: string;
}

const WithdrawRequests: React.FC<WithdrawRequestsProps> = ({ amount = "$1000.00" }) => {
  const t = useTranslations();

  const handleWithdraw = () => {
    console.log("onRequestWithdraw");
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl dark-color">{t("withdraw_requests")}</h2>
      <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
        {/* Balance */}
        <div className="text-center sm:text-right">
          <p className="text-emerald-600 text-xl sm:text-2xl">{amount}</p>
          <p className="text-slate-500 text-sm mt-1">{t("available_balance")}</p>
        </div>

        {/* Withdraw button */}
        <div className="sm:text-left">
          <button
            type="button"
            onClick={handleWithdraw}
            className="bg-emerald-500 text-white text-sm px-5 py-2.5 rounded-lg font-medium transition hover:bg-emerald-600 w-full sm:w-auto"
          >
            {t("request_withdraw")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequests;
