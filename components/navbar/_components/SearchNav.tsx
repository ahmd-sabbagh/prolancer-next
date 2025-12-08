import { useTranslations } from "next-intl";
import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchNav = () => {
  const t = useTranslations();
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="grow hidden lg:block">
      <form onSubmit={onsubmit} className="flex justify-between items-center rounded-sm overflow-hidden" >
        <input
          type="text"
          id="search_h"
          placeholder={t("search_placeholder")}
          className="grow bg-white h-10.5 placeholder:text-[#9CA3AF]! p-4"
        />
        <button type="submit" className="bg-green-color text-white h-10.5 w-[50px] flex-center text-2xl">
          <LuSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchNav;
