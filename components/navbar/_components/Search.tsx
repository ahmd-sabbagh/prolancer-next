import { search } from "@/assets";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  const t = useTranslations();
  return (
    <div className="mt-4">
      <div className="container">
        <div className="rounded-md overflow-hidden">
          <div className="bg-[#444444] h-[52px] flex items-center">
            <button className="items-center gap-1 h-full border-e-2 border-[#71717A]  px-4 hidden md:flex">
              <span className="text-white">{t("all_departments")}</span>
              <IoIosArrowDown className="text-white text-xl" />
            </button>

            <div className={cn("h-[52px] flex items-center grow px-4 gap-7")}>
              <div className="relative w-4 h-4">
                <Image
                  src={search}
                  alt="search icon"
                  fill
                  loading="lazy"
                  sizes="16px"
                />
              </div>
              <input
                type="text"
                id="search_h"
                placeholder={t("search_placeholder")}
                className={cn(
                  "placeholder:text-[14px] placeholder:text-[#9CA3AF]"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
