import { frame } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const LatestOperations = () => {
  const t = useTranslations();
  return (
    <div className="mt-7.5">
      <h3 className="text-xl dark-color md:text-2xl">
        {t("Latest operations")}
      </h3>
      <div className="mt-6 bg-white rounded-sm p-4 pb-8 md:py-9 md:px-10 border border-[#E4E5E7]">
        <div className="max-w-[400px] mx-auto">
          <div className="h-60 relative">
            <Image src={frame} alt="frame" loading="lazy" fill sizes="100%" />
          </div>
        </div>
        <p className="md:text-2xl mt-3 text-center dark-color">
          {t("The beginnings are very exciting")}
        </p>
        <p className="text-sm md:text-base mt-2 md:mt-4 text-center text-[#62646A]">
          {t(
            "You will find all your earnings information here once you have completed your first order"
          )}
        </p>
      </div>
    </div>
  );
};

export default LatestOperations;
