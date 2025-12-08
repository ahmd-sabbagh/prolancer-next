import React from "react";
interface TextProps {
    title: string;
    subtitle: string;
}

const Text: React.FC<TextProps> = ({ title, subtitle }) => {
  return (
    <>
      <h3 className="mt-6 text-2xl dark-color text-center">{title}</h3>
      <p className="text-center text-[#00000066] text-sm mt-2">
        {subtitle}
      </p>
    </>
  );
};

export default Text;
