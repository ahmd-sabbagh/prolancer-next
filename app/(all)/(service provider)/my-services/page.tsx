"use client";

import React from "react";
import { useTranslations } from "next-intl";
import ServiceCard from "../_components/service-card/ServiceCard";
import { services } from "../_components/services-data";
import Link from "next/link";
import Header from "../_components/Header";

const MyServicesPage: React.FC = () => {
  const t = useTranslations();

  return (
    <section className="min-h-screen bg-[#F6F8FB] pb-10">
      <div className="container pt-8">
        <div className="mb-9 mt-7 flex justify-between">
          <Header />
          <Link
            href="/my-services/addNewService/step-1"
            className="py-2 px-6 rounded-xl bg-green-color text-white text-sm"
          >
            {t("Add a service")}
          </Link>
        </div>

        <div className="space-y-6 md:space-y-[32px]">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServicesPage;
