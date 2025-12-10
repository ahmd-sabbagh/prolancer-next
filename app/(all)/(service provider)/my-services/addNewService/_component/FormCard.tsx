import React from "react";

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
}

const FormCard: React.FC<FormCardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-[10px]
        bg-white
        px-4 md:px-6 py-5 md:py-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default FormCard;
