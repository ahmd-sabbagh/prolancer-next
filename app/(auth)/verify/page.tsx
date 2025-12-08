import React from "react";
import ImageMiddleBg from "../_components/ImageMiddleBg";
import PasswordIcon from "../_components/PasswordIcon";
import Text from "../_components/Text";
import { useTranslations } from "next-intl";
import Otp from "./Otp";

const VerifyPage = () => {
    const t = useTranslations()
  return (
    <section className="px-4">
      <ImageMiddleBg>
        <div className="relative z-20 bg-white px-8 md:px-[90px] pt-8 pb-14 max-w-[505px] rounded-[34px] grow box-shadow">
          <PasswordIcon />
          <Text title={t("check_code")} subtitle={t("check_code_sub")} />
          <Otp />
        </div>
      </ImageMiddleBg>
    </section>
  );
};

export default VerifyPage;
