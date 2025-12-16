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
    <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">

      <div className="hidden lg:block lg:self-end">
        <ServiceHeader isActive={isActive} />
      </div>

      <div
        className="
          w-full
          flex flex-col lg:flex-row
          items-center
          gap-3
          text-xs text-gray-500
          justify-center
          lg:flex-wrap lg:items-center lg:justify-end lg:gap-4
        "
      >
        {/* group of stats */}
        <div className="flex items-center gap-3  lg:gap-1">
          <div className="flex items-center gap-1 justify-center lg:basis-auto lg:justify-end">
            <AiOutlineClockCircle className="w-4 h-4 text-[#00B274]" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1 justify-center lg:basis-auto lg:justify-end">
            <FiRefreshCcw className="w-4 h-4 text-[#00B274]" />
            <span>{revisions}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500 justify-center lg:basis-auto lg:justify-end">
            <LuWallet className="w-4 h-4 text-[#00B274]" />
            <span>${price}</span>
          </div>
        </div>

        {/* share button */}
        <div className="flex justify-center lg:basis-auto lg:justify-end">
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;
