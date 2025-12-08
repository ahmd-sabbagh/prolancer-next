import React from "react";
import ImageMiddleBg from "../_components/ImageMiddleBg";
import { useTranslations } from "next-intl";
import Text from "../_components/Text";
import Form from "./Form";
import LoginBy from "../_components/LoginBy";

const RegisterPage = () => {
  const t = useTranslations();
  return (
    <section className="">
      <ImageMiddleBg>
        <div className="relative z-20 bg-white px-8 md:px-[90px] pt-8 pb-14 max-w-[505px] rounded-[34px] grow shadow-xl">
          <Text title={t("new_account")} subtitle={t("new_welcom")} />
          <Form />
        </div>
         <LoginBy />
      </ImageMiddleBg>
    </section>
  );
};

export default RegisterPage;
