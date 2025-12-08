import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { HiDotsHorizontal } from "react-icons/hi";

interface ServiceHeaderProps {
  isActive: boolean;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ isActive }) => {
  return (
    <div className="flex flex-row-reverse items-center gap-10 self-end">
      <button className="w-8 h-8 flex items-center justify-center bg-transparent rounded-full text-[#111827]">
        <HiDotsHorizontal className="w-5 h-5" />
      </button>

      <ToggleSwitch isActive={isActive} />
    </div>
  );
};

export default ServiceHeader;
