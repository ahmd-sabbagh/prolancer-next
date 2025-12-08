import Title from "@/components/title/Title";
import { useTranslations } from "next-intl";
import Supports from "./_components/Supports";
import Faqs from "@/components/faqs/Faqs";

const MessagesAndSupport = () => {
  const t = useTranslations();
  
  return (
    <section className="pt-10 bg-[#F8FAFF] pb-20">
      <div className="container">
        <Title title={t("Messages and support")} subTitle={t("Messages and support sub")} />
        <Supports />
      </div>
      <Faqs className="mt-20" />
    </section>
  );
};

export default MessagesAndSupport;
