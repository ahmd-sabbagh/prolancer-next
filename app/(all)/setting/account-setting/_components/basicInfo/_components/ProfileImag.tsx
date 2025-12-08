"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const ProfileImag = () => {
  const t = useTranslations();
  const [preview, setPreview] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };
  return (
    <div className="mt-5">
      <h4 className="dark-color">{t("profile_image")}</h4>
      <div className="mt-3 flex items-center gap-5">
        {/* img */}
        <div className="w-[120px] h-[120px] relative rounded-lg bg-[#E4E4E4] overflow-hidden">
          {preview && (
            <Image
              src={preview}
              alt="profile img"
              fill
              loading="lazy"
              sizes="120px"
              className="object-cover"
            />
          )}
        </div>
        {/* select */}
        <div className="">
          <span className="dark-color">{t("upload_image")}</span>
          <span className="mt-1 text-xs text-[#67696E] block">
            {"JPG 80x90px"}
          </span>
          <div className="border border-[#E4E4E4] w-fit p-2 rounded-sm mt-3 flex items-center">
            <label
              htmlFor="img"
              className={cn(
                "py-2 px-3 md:px-5.5 text-xs rounded-sm",
                preview ? "green-color bg-[#00D3881A]" : "text-[#B1B1B1]"
              )}
            >
              <input
                type="file"
                id="img"
                className="hidden"
                onChange={handleImageChange}
              />
              {t("Select file")}
            </label>
            <span
              className={cn(
                "py-2 px-3 md:px-5.5 text-xs rounded-sm",
                !preview ? "green-color bg-[#00D3881A]" : "text-[#B1B1B1]"
              )}
            >
              {t("No file")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImag;
