"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React, { useState, forwardRef } from "react";

interface InputProps {
  type?: "email" | "password" | "tel" | "text";
  placeholder?: string;
  label?: boolean;
  icon: StaticImageData;
  name?: string;
  requ?: boolean;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, label, icon, name, requ = true, error, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="flex flex-col gap-1">
        <div
          className={`relative px-5 py-[22px] rounded-xl border flex items-center ${
            isFocused ? "border-[#1DBF73]" : "border-[#0000000D]"
          }`}
        >
          {label && (
            <div className=" absolute px-2 bg-white -top-4 start-6">
              <label
                className={`text-xs ${
                  isFocused ? "text-[#1DBF73]" : "text-[#00000066]"
                }`}
              >
                {placeholder}
              </label>
            </div>
          )}

          <div className="w-6 h-6 relative">
            <Image src={icon} alt="icon" fill className="object-contain" />
          </div>

          <input
            ref={ref}
            name={name}
            required={requ}
            type={type}
            placeholder={placeholder}
            className={cn(
              "grow border-0 outline-0 ps-4 placeholder:text-xs placeholder:font-light"
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            dir={type === "tel" ? "rtl" : undefined}
            {...rest}
          />
        </div>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
