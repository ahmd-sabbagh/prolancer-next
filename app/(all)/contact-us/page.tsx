import Title from "@/components/title/Title";
import { useTranslations } from "next-intl";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  const t = useTranslations();
  return (
    <section className="pt-10 bg-[#F8FAFF] pb-20">
      <div className="container">
        <Title title={t("contact")} subTitle={t("contact_us_sub")} />
        <div className="grid lg:grid-cols-6 gap-8 mt-10">
          <div className="lg:col-span-4 xl:col-span-5 p-4 md:p-8 bg-white border border-[#D2D6DB] rounded-2xl order-2 lg:order-1!">
            <Form />
          </div>
          <div className="lg:col-span-2 xl:col-span-1 flex flex-col gap-6.5 lg:order-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
