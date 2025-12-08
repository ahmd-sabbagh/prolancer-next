import { vector_person } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Competencies = () => {
  const t = useTranslations();
  return (
    <section className="bg-[#F8FAFF] md:pt-[100px]">
      <div className="container">
        <div className="bg-[#262626] p-4 md:p-12 rounded-lg md:flex items-center justify-between">
          <div className="">
            <h3 className="md:text-3xl xl:text-6xl font-bold text-center md:text-start">
              <span className="green-color block">{t("Many")}</span>
              <span className="block md:mt-5 text-white">
                {t("Outstanding technical skills")}
              </span>
            </h3>
            <p className="mt-2 md:mt-6 text-white text-sm lg:text-xl max-w-[600px] xl:max-w-[865px] font-light text-center md:text-start">
              {
                "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  توليد هذا النص من مولد النص العربى، "
              }
            </p>
            <Link
              href={"/login"}
              className="py-3 px-6 rounded-lg bg-green-color text-sm text-white mt-4 block md:w-fit text-center"
            >
              {t("log in now")}
            </Link>
          </div>
          <div className="w-[180px] xl:w-[346px] md:h-[221px] xl:h-[404px] relative lg:me-10">
            <Image
              src={vector_person}
              alt="shape vector"
              fill
              loading="lazy"
              sizes="(min-width: 1280px) 346px, 180px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
