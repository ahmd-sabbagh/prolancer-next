import React from "react";
interface BtnSubmitProps {
  text: string;
  className?: string;
}

const BtnSubmit: React.FC<BtnSubmitProps> = ({ text, className }) => {
  return (
    <button
      type="submit"
      className={`block w-full bg-green-color text-white text-center rounded-xl text-sm py-5 ${className}`}
    >
      {text}
    </button>
  );
};

export default BtnSubmit;
