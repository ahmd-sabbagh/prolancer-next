"use client";

import Image from "next/image";
import {
  facebook_a,
  instagram_a,
  linkedin_a,
  pintrest_a,
  twitter_a,
  youtube_a,
} from "@/assets";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

export default function SocialInputs() {
  const t = useTranslations();
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [links, setLinks] = useState<string[]>(Array(6).fill(""));

  const links_icon = [
    facebook_a,
    twitter_a,
    instagram_a,
    linkedin_a,
    pintrest_a,
    youtube_a,
  ];

  const handleChange = (index: number, value: string) => {
    const updated = [...links];
    updated[index] = value;
    setLinks(updated);
  };

  const clearField = (index: number) => {
    const updated = [...links];
    updated[index] = "";
    setLinks(updated);
  };

  return (
    <div className="bg-white p-4 md:px-10 md:py-9 mt-7.5 rounded-xl">
      <h3 className="md:text-xl dark-color">{t("Social media accounts")}</h3>

      <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-5 mt-5">
        {links.map((value, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* ICON */}
            <div className="w-8 h-8">
              <Image
                src={links_icon[index]}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
            {/* INPUT WRAPPER */}
            <div
              className={cn(
                "bg-[#F5F7F9] flex items-center py-3 px-4.5 grow rounded-sm border border-transparent ",
                focusIndex === index && " border-[#00D388]!"
              )}
            >
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={t("url")}
                className="grow"
                onFocus={() => setFocusIndex(index)}
                onBlur={() => setFocusIndex(null)}
              />
              <button
                onClick={() => clearField(index)}
                className="w-5.5 h-5.5 rounded-full flex-center border"
              >
                <IoClose />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
