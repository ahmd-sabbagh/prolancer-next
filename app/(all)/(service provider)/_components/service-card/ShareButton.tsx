import React from "react";
import { FiShare2 } from "react-icons/fi";

const ShareButton: React.FC = () => {
  return (
    <button
      type="button"
      className="
        w-10 h-10 sm:w-[48px] sm:h-[48px]
        rounded-full border border-[#E5E7EB]
        flex items-center justify-center
      "
    >
      <FiShare2 className="w-6 h-6 sm:w-[28px] sm:h-[28px] text-[#111827]" />
    </button>
  );
};

export default ShareButton;
