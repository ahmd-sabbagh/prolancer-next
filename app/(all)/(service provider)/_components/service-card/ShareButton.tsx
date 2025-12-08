import React from "react";
import { FiShare2 } from "react-icons/fi";

const ShareButton: React.FC = () => {
  return (
<button
  type="button"
  className="w-[48px] h-[48px] rounded-full border border-[#E5E7EB] flex items-center justify-center"
>
  <FiShare2 className="w-[28px] h-[28px] text-[#111827]" />
</button>

  );
};

export default ShareButton;
