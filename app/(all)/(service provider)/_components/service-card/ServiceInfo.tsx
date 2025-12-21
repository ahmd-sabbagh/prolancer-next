import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface ServiceInfoProps {
  title: string;
  category: string;
  rate: number | string;
  reviewsCount: number | string;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({
  title,
  category,
  rate,
  reviewsCount,
}) => {
  const t = useTranslations();

  return (
    <div className="flex-1 lg:pr-6 flex flex-col items-center lg:items-start gap-3 text-center lg:text-right">
      {/* CATEGORY */}
      <div className="flex items-center justify-center md:justify-start gap-2 h-[24px]">
        <FiLayers className="text-[#00B274] w-6 h-6" />
        <span className="text-[#8A8A8A] text-[11px] md:text-[12px] leading-[12px]">
          {category}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] font-semibold text-[#111827]">
        {title}
      </h3>

      {/* RATING */}
      <div className="flex items-center justify-center md:justify-start gap-2 h-[26px]">
        <AiFillStar className="text-[#F8B400] w-5 h-5" />
        <span className="text-[#111827] font-medium text-[16px] md:text-[18px] leading-[26px]">
          {rate}
        </span>
        <span className="text-[#8A8A8A] text-[14px] md:text-[16px] leading-[26px]">
          ({reviewsCount} {t("ratings")})
        </span>
      </div>
    </div>
  );
};


export default ServiceInfo;
