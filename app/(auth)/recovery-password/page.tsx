import React from "react";
import ImageMiddleBg from "../_components/ImageMiddleBg";
import PasswordIcon from "../_components/PasswordIcon";
import Text from "../_components/Text";
import { useTranslations } from "next-intl";
import Form from "./Form";

const RecoveryPasswordPage = () => {
  const t = useTranslations();
  return (
    <section>
      <ImageMiddleBg>
        <div className="relative z-20 bg-white px-8 md:px-[90px] pt-8 pb-14 max-w-[505px] rounded-[34px] grow box-shadow">
          <PasswordIcon />
          <Text title={t("recovery_password")} subtitle={t("recovery_pass_sub")} />
          <Form />
        </div>
      </ImageMiddleBg>
    </section>
  );
};

export default RecoveryPasswordPage;
