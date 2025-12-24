"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import BtnSubmit from "../_components/BtnSubmit";
import { LuSearch } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { login } from "@/lib/store/ui/authSlice";

const Form = () => {
  const t = useTranslations();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login());
    router.replace("/");
  };
  const options = ["React", "Next.js", "TypeScript", "Redux Toolkit"];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  return (
    <form onSubmit={onSubmit} className="mt-10">
      {/* search */}
      <div className="p-4 rounded-xl border border-[#E6E9EA] flex items-center gap-3">
        <div className="text-2xl">
          <LuSearch />
        </div>
        <input
          type="text"
          placeholder={t("search_about")}
          className="grow placeholder:text-[#979797] placeholder:text-sm"
        />
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {options.map((item, idx) => {
          const isSelected = selectedOptions.includes(item);
          return (
            <label
              htmlFor={`one-${idx}`}
              key={idx}
              className={cn(
                "rounded-xl py-3.5 border text-center  text-sm",
                isSelected
                  ? "border-[#1DBF73] green-color bg-[#1DBF731A]"
                  : "border-[#DDDFDF] text-[#141F1F] bg-[#F9FAFA]"
              )}
            >
              <input
                id={`one-${idx}`}
                type="checkbox"
                checked={selectedOptions.includes(item)}
                onChange={() => handleCheckboxChange(item)}
                className="hidden"
              />
              {item}
            </label>
          );
        })}
      </div>
      <BtnSubmit text={t("presentation")} className="mt-3.5" />
    </form>
  );
};

export default Form;
