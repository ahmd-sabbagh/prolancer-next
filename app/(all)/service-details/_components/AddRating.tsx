"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const AddRating = () => {
  const t = useTranslations();
  const [avg, setAvg] = useState<number>(0);
  const [focus, setFocus] = useState<boolean>(false);
  const [focus2, setFocus2] = useState<boolean>(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const renderStars = (avg: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        className={`${
          index < avg ? "opacity-100" : "opacity-30"
        } text-xl text-[#F4AA1A] block cursor-pointer`}
        key={index}
        onClick={() => {
          setAvg(index + 1);
        }}
      >
        <FaStar />
      </span>
    ));
  };
  return (
    <div className="mt-8">
      <h4 className="text-xl dark-color">{t("rating_you")}</h4>
      <form onSubmit={onSubmit} className="mt-4">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-2 grow w-full">
            <label htmlFor={"name"} className="dark-color text-sm">
              {t("name")}
            </label>
            <input
              type={"text"}
              id={"name"}
              placeholder={t("name")}
              className={cn(
                "grow border! rounded-4xl py-3 px-4 placeholder:text-xs!",
                focus ? "border-[#00D388]!" : "border-[#E4E4E4]!"
              )}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </div>
          <div className="flex flex-col gap-2 grow w-full">
            <label htmlFor={"email"} className="dark-color text-sm">
              {t("the_email")}
            </label>
            <input
              type={"text"}
              id={"email"}
              placeholder={t("the_email")}
              className={cn(
                "grow border! rounded-4xl py-3 px-4 placeholder:text-xs!",
                focus2 ? "border-[#00D388]!" : "border-[#E4E4E4]!"
              )}
              onFocus={() => setFocus2(true)}
              onBlur={() => setFocus2(false)}
            />
          </div>
        </div>
        {/* add rating */}
        <div className="flex items-center gap-5 mt-5">
          <span className="dark-color">{t("Select your rating")}</span>
          <div className="flex items-center gap-1">{renderStars(avg)}</div>
        </div>
        <div className="md:col-span-2 flex flex-col mt-5">
          <label htmlFor="about" className="dark-color text-sm">
            {t("Write your review")}
          </label>
          <textarea
            id="about"
            placeholder={t("Your rating here")}
            className="mt-2 border border-[#E4E4E4] h-20 grow rounded-lg py-2 px-4 outline-0"
          ></textarea>
        </div>
        <button
          type="submit"
          className="block bg-green-color text-white py-3.5 px-12 rounded-xl mt-5 ms-auto me-0"
        >
          {t("send")}
        </button>
      </form>
    </div>
  );
};

export default AddRating;
