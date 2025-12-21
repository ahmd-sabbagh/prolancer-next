"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { FiImage } from "react-icons/fi";
import Image from "next/image";

const ImageUploadBox: React.FC = () => {
  const t = useTranslations();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-4 sm:gap-5">
      <div
        onClick={() => inputRef.current?.click()}
        className="w-[140px] h-[140px] rounded-[18px] bg-[#E3F9ED] flex flex-col items-center justify-center gap-3 cursor-pointer"
      >
        {!preview && (
          <div className="w-[48px] h-[48px] rounded-xl bg-[#00D084]/10 flex items-center justify-center text-[#00B274]">
            <FiImage className="w-7 h-7" />
          </div>
        )}

        {preview && (
          <Image
            src={preview}
            alt="Preview"
            width={80}
            height={90}
            className="rounded-lg object-cover"
          />
        )}

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={(e) =>
            e.target.files && setPreview(URL.createObjectURL(e.target.files[0]))
          }
        />
      </div>

      <div className="flex flex-col gap-1 text-xs sm:text-sm">
        <span className="text-[#111827] font-medium">{t("upload_image")}</span>
        <span className="text-[#9CA3AF]">{t("image_size")}</span>
      </div>
    </div>
  );
};

export default ImageUploadBox;
