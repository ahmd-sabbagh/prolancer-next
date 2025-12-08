import React from "react";
import { FiShare2 } from "react-icons/fi";

const ShareButton: React.FC = () => {
  return (
    <button
      type="button"
      className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center"
    >
      <FiShare2 className="w-5 h-5 text-[#111827]" />
    </button>
  );
};

export default ShareButton;
