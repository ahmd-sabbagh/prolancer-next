import { how_shape } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Card from "./Card";

const Experts = () => {
  const t = useTranslations();
  return (
    <section className="bg-[#F8FAFF] pt-10 md:pt-[100px]">
      <div className="container">
        <div>
          <h2 className="md:text-2xl dark-color">
            {t("Top-rated experts and specialists")}
          </h2>
          <div className="h-[17px] w-[123px] relative mt-1 md:mt-5">
            <Image
              src={how_shape}
              alt="line"
              fill
              sizes="123px"
              loading="lazy"
            />
          </div>
        </div>
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  mt-5 md:mt-8 gap-4 md:gap-6 lg:gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </section>
  );
};

export default Experts;
