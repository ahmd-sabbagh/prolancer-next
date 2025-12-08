import { how_shape } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Services from "../services/Services";

const NewlyAddedServices = () => {
  const t = useTranslations();
  return (
    <section className="py-20 bg-[#F8FAFF]">
      <div className="container">
        {/* title */}
        <div>
          <h2 className="text-2xl dark-color">{t("Newly added services")}</h2>
          <div className="h-[17px] w-[123px] relative mt-5">
            <Image
              src={how_shape}
              alt="line"
              fill
              sizes="123px"
              loading="lazy"
            />
          </div>
        </div>
        {/* Services */}
        <div className="mt-8 flex flex-col gap-8">
          <Services />
          <Services />
          <Services />
          <Services />
        </div>
      </div>
    </section>
  );
};

export default NewlyAddedServices;
