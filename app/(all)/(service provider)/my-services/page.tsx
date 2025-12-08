import React from "react";
import TitleLink from "../_components/TitleLink";
import { useTranslations } from "next-intl";
import Service from "../_components/Service";

const MyservicesPage = () => {
  const t = useTranslations();
  return (
    <section className="pt-10 pb-16 bg-[#F8FAFF]">
      <div className="container">
        <TitleLink
          title={t("myServices")}
          nameLink={t("Add a service")}
          link=""
        />
        <div className="mt-8">
            <Service />
        </div>
      </div>
    </section>
  );
};

export default MyservicesPage;
