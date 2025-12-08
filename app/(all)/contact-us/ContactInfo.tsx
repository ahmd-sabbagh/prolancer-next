import { mail_color, phone_color, speaker } from "@/assets";
import { useTranslations } from "next-intl";
import InfoCard from "./InfoCard";

const ContactInfo = () => {
  const t = useTranslations();
  const data = [
    {
      icon: mail_color,
      title: t("email"),
      info: "info@info.com",
    },
    {
      icon: phone_color,
      title: t("phone"),
      info: "00966126929242",
    },
    {
      icon: speaker,
      title: t("Marketing and Advertising Management"),
      info: "pr@prolancer.com",
    },
  ];
  return (
    <>
      {data.map((item, idx) => (
        <InfoCard {...item} key={idx} />
      ))}
    </>
  );
};

export default ContactInfo;
