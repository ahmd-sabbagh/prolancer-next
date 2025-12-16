"use client";

import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import { toggleRole } from "@/lib/store/slices/roleSlice";

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
    <button
      type="button"
      onClick={() => dispatch(toggleRole())}
      className="text-sm green-color hidden lg:block"
    >
      {isServiceProvider
        ? t("Transfer to a service requester")
        : t("Transfer to a service provider")}
    </button>
  );
};

export default TransferProvider;
