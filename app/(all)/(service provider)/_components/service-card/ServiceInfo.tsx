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
    <div className="flex-1 md:pr-6 space-y-2">

      {/* category */}
      <div className="flex items-center gap-2 text-xs">
        <FiLayers className="text-[#00B274] w-4 h-4" />
        <span className="text-[#8A8A8A]">{category}</span>
      </div>

      {/* title */}
      <h3 className="text-sm md:text-xl font-semibold text-[#111827] mt-3">
        {title}
      </h3>

      {/* rating */}
      <div className="flex items-center gap-1 text-xs text-[#8A8A8A] mt-2">
        <AiFillStar className="text-[#F8B400] w-4 h-4" />

        <span className="text-[#111827] font-medium">{rate}</span>

        <span>({reviewsCount} تقييم)</span>
      </div>
    </div>
  );
};

export default ServiceInfo;
