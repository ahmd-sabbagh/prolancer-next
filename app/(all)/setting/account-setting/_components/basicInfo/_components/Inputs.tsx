"use client";

import { useTranslations, useLocale } from "next-intl";
import Input from "./Input";
import SkillsInput from "./SkillsAndTools";
import AboutYou from "./AboutYou";

const Inputs = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar"; // لتحديد اتجاه النص حسب اللغة

  const input_data = [
    {
      label: t("name"),
      type: "text",
      id: "1_name",
    },
    {
      label: t("the_email"),
      type: "email",
      id: "2_email",
    },
    {
      label: t("phone"),
      type: "tel",
      id: "3_tel",
    },
    {
      label: t("site"),
      type: "text",
      id: "4_site",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 mt-5 gap-5">
      {input_data.map((input, idx) => (
        <Input
          {...input}
          key={idx}
          dir={isRTL ? "rtl" : "ltr"} // اتجاه الكتابة
          textAlign={isRTL ? "right" : "left"} // محاذاة النص
        />
      ))}
      <SkillsInput />
      <AboutYou />
    </div>
  );
};

export default Inputs;
