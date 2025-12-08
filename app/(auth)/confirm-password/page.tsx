import React from "react";
import ImageMiddleBg from "../_components/ImageMiddleBg";
import PasswordIcon from "../_components/PasswordIcon";
import { useTranslations } from "next-intl";
import Text from "../_components/Text";
import Form from "./Form";

const RecoveryPage = () => {
  const t = useTranslations()
  return (
    <section>
      <ImageMiddleBg>
        <div className="relative z-20 bg-white px-8 md:px-[90px] pt-8 pb-14 max-w-[505px] rounded-[34px] grow box-shadow">
          <PasswordIcon />
          <Text title={t("new_password")} subtitle={t("new_password_sub")} />
          <Form />
        </div>
      </ImageMiddleBg>
    </section>
  );
};

export default RecoveryPage;
