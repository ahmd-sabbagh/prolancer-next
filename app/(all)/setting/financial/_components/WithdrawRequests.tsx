"use client";

import React from "react";

interface WithdrawRequestsProps {
  amount?: string;
}

const WithdrawRequests: React.FC<WithdrawRequestsProps> = ({
  amount = "$1000.00",
}) => {
  const handleWithdraw = () => {
    console.log("onRequestWithdraw");
  };

  return (
    <div >
      <h2 className="text-2xl md:text-3xl dark-color">طلبات السحب</h2>
      <div
        className="
          rounded-xl
          border border-emerald-100
          bg-emerald-50/60
          px-4 sm:px-6
          py-4
          flex flex-col sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          mt-10
        "
      >
        {/* يمين: الرصيد */}
        <div className="text-center sm:text-right">
          <p className="text-emerald-600 text-xl sm:text-2xl">
            {amount}
          </p>
          <p className="text-slate-500 text-sm mt-1">الرصيد المتاح للسحب</p>
        </div>

        {/* يسار: زر طلب سحب */}
        <div className="sm:text-left">
          <button
            type="button"
            onClick={handleWithdraw}
            className="
              bg-emerald-500
              text-white
              text-sm
              px-5
              py-2.5
              rounded-lg
              font-medium
              transition
              hover:bg-emerald-600
              w-full sm:w-auto
            "
          >
            طلب سحب
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequests;
