"use client";

import React from "react";

type SelectFieldProps = {
  placeholder: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  children?: React.ReactNode;
  wrapperClassName?: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  placeholder,
  value,
  onChange,
  children,
  wrapperClassName = "relative w-full",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={wrapperClassName}>
      <select
        className="
          w-full h-[50px]
          rounded-[5px]
          border border-[#E5E7EB]
          bg-white
          pr-4 pl-10
          text-sm text-[#111827]
          outline-none text-right
          appearance-none
          focus:border-[#00B274]
          focus:ring-2 focus:ring-[#00B27433]
        "
        value={value === undefined ? "" : value}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </select>

      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
        ▾
      </span>
    </div>
  );
};

export default SelectField;
