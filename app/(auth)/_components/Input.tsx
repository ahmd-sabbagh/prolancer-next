"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

interface InputProps {
  type?: "email" | "password" | "tel" | "text";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: boolean;
  icon: StaticImageData;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  label,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`relative px-5 py-[22px] rounded-xl border flex items-center ${isFocused ? "border-[#1DBF73]" : "border-[#0000000D]"
        }`}
    >
      {label && (
        <div className=" absolute px-2 bg-white -top-4  start-6">
          <label
            className={`text-xs ${isFocused ? "text-[#1DBF73]" : "text-[#00000066]"
              }`}
            htmlFor={type}
          >
            {placeholder}
          </label>
        </div>
      )}
      <div className="w-6 h-6 relative">
        <Image src={icon!} alt="icon" fill className="object-contain" />
      </div>
      <input
        id={type}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn("grow border-0 outline-0 ps-4 placeholder:text-xs placeholder:font-light placeholder:text-[#00000066]")}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        dir={type === "tel" ? "rtl" : undefined}
        autoComplete={
          type === "email"
            ? "email"
            : type === "password"
              ? "current-password"
              : type === "tel"
                ? "tel"
                : "off"
        }
      />
    </div>
  );
};

export default Input;
