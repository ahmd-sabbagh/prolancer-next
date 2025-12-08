"use client"
import { useTranslations } from "next-intl";
import Input from "./Input";
import SkillsInput from "./SkillsAndTools";
import AboutYou from "./AboutYou";

const Inputs = () => {
  const t = useTranslations();
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
        <Input {...input} key={idx} />
      ))}
      <SkillsInput />
      <AboutYou />
    </div>
  );
};

export default Inputs;
