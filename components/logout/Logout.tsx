"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { logout } from "@/lib/store/slices/authSlice";

const Logout = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="bg-[#E5322D1A] px-5 py-3 rounded-[100px] text-[#E5322D]"
    >
      {t("logout")}
    </button>
  );
};

export default Logout;
