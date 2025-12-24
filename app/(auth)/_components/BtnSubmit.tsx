import SnipperButton from "@/components/sniperBtn/SniperBtn";
import React from "react";
interface BtnSubmitProps {
  text: string;
  className?: string;
  loading?: boolean;
}

const BtnSubmit: React.FC<BtnSubmitProps> = ({ text, className,loading }) => {
  return (
    <button
      type="submit"
      className={`flex justify-center items-center w-full bg-green-color text-white text-center rounded-xl text-sm py-5 ${className}`}
    >

      {loading ? <SnipperButton /> : text}
    </button>
  );
};

export default BtnSubmit;
