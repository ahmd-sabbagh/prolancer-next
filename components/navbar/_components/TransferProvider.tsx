"use client";

import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import { toggleRole } from "@/lib/store/slices/roleSlice";
import { MdSwapHoriz } from "react-icons/md";

const TransferProvider = () => {
  const t = useTranslations();
  const dispatch = useDispatch();

  const isServiceProvider = useSelector(
    (state: RootState) => state.role.isServiceProvider
  );

  useEffect(() => {
    console.log(
      "Current Role:",
      isServiceProvider ? "Service Provider" : "Service Requester"
    );
  }, [isServiceProvider]);

  return (
    <div className="flex items-center">
      {/* زر نصي للأجهزة الكبيرة */}
      <button
        type="button"
        onClick={() => dispatch(toggleRole())}
        className="text-sm green-color hidden lg:block"
      >
        {isServiceProvider
          ? t("Transfer to a service requester")
          : t("Transfer to a service provider")}
      </button>

      {/* أيقونة الموبايل */}
      <button
        type="button"
        onClick={() => dispatch(toggleRole())}
        className="lg:hidden relative w-6 h-6 flex-center text-white rounded-full transition-colors"
        aria-label="Transfer Role"
      >
        <MdSwapHoriz className="w-full h-full" />
      </button>
    </div>
  );
};

export default TransferProvider;
