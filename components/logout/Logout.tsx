"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useAuth } from "@/app/context/AuthContext";

const Logout = () => {
  const t = useTranslations();
  const router = useRouter();
  const {setToken} = useAuth()

  const handleLogout = () => {
    deleteCookie("token");
    deleteCookie("user");
    router.replace("/");
    setToken(null);
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
