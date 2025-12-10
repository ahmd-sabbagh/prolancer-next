"use client";

import React from "react";
import { useTranslations } from "next-intl";
import TitleLink from "../_components/TitleLink";
import ServiceCard from "../_components/service-card/ServiceCard";
import { services } from "../_components/services-data";

const MyServicesPage: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="bg-[#F8FAFF]">
      <div
        className="
          mx-auto
          max-w-[1511px]
          min-h-[658px]
          pt-[122px]
          pb-[204px]
          px-4
          space-y-8
        "
      >
        <TitleLink
          title={t("myServices")}
          nameLink={t("Add a service")}
          link="/my-services/addNewService/step-1"
        />

        <div className="space-y-[32px]">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServicesPage;
