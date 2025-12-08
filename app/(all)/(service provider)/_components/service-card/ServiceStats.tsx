import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import ServiceHeader from "./ServiceHeader";
import ShareButton from "./ShareButton";
import { LuWallet } from "react-icons/lu";

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
  isActive,
}) => {
  return (
    <div className="flex flex-col items-end gap-10 w-full md:w-auto">

      {/* toggle + dots */}
      <ServiceHeader isActive={isActive} />

      <div className="flex items-center gap-6 text-xs text-gray-500">

        {/* duration */}
        <div className="flex items-center gap-1">
          <AiOutlineClockCircle className="w-4 h-4 text-[#00B274]" />
          <span>{duration}</span>
        </div>

        {/* revisions */}
        <div className="flex items-center gap-1">
          <FiRefreshCcw className="w-4 h-4 text-[#00B274]" />
          <span>{revisions}</span>
        </div>

        {/* price */}
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <LuWallet className="w-4 h-4 text-[#00B274]" />
          <span>${price}</span>
        </div>

        {/* share button */}
        <ShareButton />
      </div>
    </div>
  );
};

export default ServiceStats;
