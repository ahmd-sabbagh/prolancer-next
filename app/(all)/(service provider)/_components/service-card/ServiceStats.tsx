import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import ServiceHeader from "./ServiceHeader";
import ShareButton from "./ShareButton";

interface ServiceStatsProps {
  price: string | number;
  duration: string;
  revisions: string;
  inQueue: string;
  isActive: boolean;
}

const ServiceStats: React.FC<ServiceStatsProps> = ({
  price,
  duration,
  revisions,
  inQueue,
  isActive,
}) => {
  return (
    <div className="flex flex-col items-end gap-6 w-full md:w-auto">
      <ServiceHeader isActive={isActive} />

      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 justify-end">
        <div className="flex items-center gap-1">
          <AiOutlineClockCircle className="w-4 h-4 text-[#00B274]" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-1">
          <FiRefreshCcw className="w-4 h-4 text-[#00B274]" />
          <span>{revisions}</span>
        </div>

        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F3F4F6] text-[11px] text-[#4B5563]">
          {inQueue}
        </span>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <LuWallet className="w-4 h-4 text-[#00B274]" />
          <span>${price}</span>
        </div>

        <ShareButton />
      </div>
    </div>
  );
};

export default ServiceStats;
