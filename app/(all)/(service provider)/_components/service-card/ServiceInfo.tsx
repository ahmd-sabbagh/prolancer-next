import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";

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
  return (
<div className="flex-1 md:pr-6 flex flex-col gap-3">

  {/* CATEGORY */}
  <div className="flex items-center gap-2 h-[24px]">
    <FiLayers className="text-[#00B274] w-6 h-6" /> {/* 24x24 */}
    <span className="text-[#8A8A8A] text-[12px] leading-[12px]">
      {category}
    </span>
  </div>

  {/* TITLE */}
  <h3 className="text-[24px] leading-[32px] font-semibold text-[#111827]">
    {title}
  </h3>

  {/* RATING */}
  <div className="flex items-center gap-2 h-[26px]">

    {/* STAR ICON */}
    <AiFillStar className="text-[#F8B400] w-5 h-5" /> {/* 20x20 */}

    {/* RATE NUMBER */}
    <span className="text-[#111827] font-medium text-[18px] leading-[26px]">
      {rate}
    </span>

    {/* REVIEW COUNT */}
    <span className="text-[#8A8A8A] text-[16px] leading-[26px]">
      ({reviewsCount} تقييم)
    </span>
  </div>

</div>

  );
};

export default ServiceInfo;
