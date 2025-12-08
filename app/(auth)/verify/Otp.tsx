"use client";
import React from "react";
import { useOtpForm } from "@/hooks/useOtpForm";

import { useTranslations } from "next-intl";
import BtnSubmit from "../_components/BtnSubmit";

const Otp = ({
  phone,
  onSuccess,
}: {
  phone?: string;
  onSuccess?: () => void;
}) => {
  const t = useTranslations();
  const {
    otp,
    inputRef,
    activeOTPIndex,
    handleChange,
    handleKeyDown,
    onSubmit,
  } = useOtpForm({ phone, onSuccess });

  return (
    <form onSubmit={onSubmit} className="verify-otp mt-10 ">
      <div className="grid grid-cols-4 items-center gap-6 justify-between" dir="ltr">
        {otp.map((val, index) => (
          <input
            key={index}
            ref={index === activeOTPIndex ? inputRef : null}
            type="number"
            value={val}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`text-center`}
          />
        ))}
      </div>
      <BtnSubmit text={t("check_code")} className="mt-6" />
    </form>
  );
};

export default Otp;
