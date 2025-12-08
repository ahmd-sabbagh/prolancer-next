import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Rating = () => {
  const t = useTranslations();
  const arr = [1, 2, 3, 4, 5];
  const ratio = ["60%", "20%", "7%", "10%", "3%"];
  return (
    <div className="mt-5 md:mt-8">
      <h4 className="text-xl md:text-3xl dark-color">{t("rating")}</h4>
      <div className="mt-5.5 flex items-center gap-5 md:gap-10 justify-between">
        {/* rate num */}
        <div className="">
          <div className="text-center dark-color text-5xl">{"4.8"}</div>
          <div className="flex items-center gap-1.5 justify-center mt-4">
            {arr.map((iem) => (
              <FaStar key={iem} className="text-xl text-[#F4AA1A]" />
            ))}
          </div>
          <p className="dark-color text-sm text-center">{"(1,968 تقييم)"}</p>
        </div>
        {/* ratio */}
        <div className="flex flex-col gap-.5 md:gap-1 grow max-w-[466px]">
          {ratio.map((item, idx) => (
            <div className="flex items-center gap-4" key={idx}>
              <div className="flex items-center gap-1 w-6">
                <FaStar className="text-sm text-[#F4AA1A]" />
                <span className="text-sm dark-color font-bold">{idx + 1}</span>
              </div>
              <div className="relative h-3 bg-[#E4E4E4] grow rounded-4xl">
                <div
                  className={cn(`absolute h-full top-0 start-0 rounded-4xl bg-[#329B6A]`)}
                  style={{ width: item }}
                ></div>
              </div>
              <p className="text-sm dark-color font-bold w-10 text-center">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
