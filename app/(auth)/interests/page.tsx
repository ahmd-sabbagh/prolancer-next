import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import Form from "./Form";

const IntrestsPage = () => {
  const t = useTranslations();
  return (
    <section className="min-h-screen flex-center bg-[#F7F8FA] px-4">
      <div className="relative z-20 bg-white px-8 md:px-14 pt-8 pb-14 max-w-[561px] rounded-[34px] grow box-shadow">
        <div className="flex justify-between">
          <h3 className="text-2xl">{t("Interests")}</h3>
          <Link
            href={"/"}
            className="w-6 h-6 rounded-full flex-center bg-[#DDDFDF]"
          >
            <IoClose />
          </Link>
        </div>
        <p className="dark-color mt-6">{t("Interests_sub")}</p>
        <Form />
      </div>
    </section>
  );
};

export default IntrestsPage;
