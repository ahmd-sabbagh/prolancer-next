"use client"
import BtnSubmit from "@/app/(auth)/_components/BtnSubmit";
import { mail_c, phone_c, question, user_c } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Form = () => {
  const t = useTranslations();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-3.5">
      {/* name */}
      <div className="py-5 px-8 rounded-2xl border border-[#3B3B3B36] flex items-center gap-2 ">
        <div className="w-5.5 h-6 relative">
          <Image
            src={user_c}
            fill
            loading="lazy"
            sizes="22px"
            alt="user icon"
          />
        </div>
        <input type="text" placeholder={t("name")} className="grow ps-2 border-s! border-[#C3CDDB]!" />
      </div>
      {/* email */}
      <div className="py-5 px-8 rounded-2xl border border-[#3B3B3B36] flex items-center gap-2 ">
        <div className="w-5.5 h-6 relative">
          <Image
            src={mail_c}
            fill
            loading="lazy"
            sizes="22px"
            alt="user icon"
          />
        </div>
        <input type="email" placeholder={t("email")} className="grow ps-2 border-s! border-[#C3CDDB]!" />
      </div>
      {/* tel */}
      <div className="py-5 px-8 rounded-2xl border border-[#3B3B3B36] flex items-center gap-2 ">
        <div className="w-5.5 h-6 relative">
          <Image
            src={phone_c}
            fill
            loading="lazy"
            sizes="22px"
            alt="user icon"
          />
        </div>
        <input type="tel" placeholder={t("phone")} className="grow ps-2 border-s! border-[#C3CDDB]!" dir="rtl" />
      </div>
      {/* question */}
      <div className="py-5 px-8 rounded-2xl border border-[#3B3B3B36] flex items-center gap-2 ">
        <div className="w-3 h-4.5 relative">
          <Image
            src={question}
            fill
            loading="lazy"
            sizes="12px"
            alt="user icon"
          />
        </div>
        <input type="text" placeholder={t("Reason for the message")} className="grow ps-2 border-s! border-[#C3CDDB]!" dir="rtl" />
      </div>
      {/* details */}
      <textarea placeholder={t("details")} className="py-5 px-8 rounded-2xl border border-[#3B3B3B36] md:col-span-2 h-[339px]"></textarea>
      {/* submit */}
      <BtnSubmit text={t("send")} className="mt-4 md:mt-10 md:w-fit! px-16 md:me-0 md:ms-auto md:col-span-2 " />
    </form>
  );
};

export default Form;
