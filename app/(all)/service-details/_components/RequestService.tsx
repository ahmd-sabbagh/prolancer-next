"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/store/hooks";

const RequestService = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const orderServiceH = () => {
    if (!isLoggedIn) {
      router.replace("/login");
      return;
    }

    router.replace("/service-details/request-service");
  };

  const text =
    pathname !== "/service-details/request-service"
      ? t("Request the service")
      : t("Approval of the first phase");

  return (
    <button
      type="button"
      className="flex-center bg-green-color text-white rounded-xl py-3 w-full mt-9"
      onClick={orderServiceH}
    >
      {text}
    </button>
  );
};

export default RequestService;
