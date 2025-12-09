"use client";

import React, { useRef, useState, useEffect } from "react";
import { FiImage } from "react-icons/fi";

export default function ImageUploadBox() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="flex items-center gap-5">
      <div
        onClick={handleClick}
        className="
          w-[170px] h-[170px]
          rounded-[18px]
          bg-[#E3F9ED]
          flex flex-col items-center justify-center
          gap-3 text-center
          cursor-pointer
          hover:bg-[#d8f4e4]
          transition
        "
      >
        {!preview && (
          <div className="w-[48px] h-[48px] rounded-xl bg-[#00D084]/10 flex items-center justify-center text-[#00B274]">
            <FiImage className="w-7 h-7" />
          </div>
        )}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-[80px] h-[90px] object-cover rounded-lg border border-[#00B27433]"
          />
        )}

        {/* input الحقيقي */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="flex flex-col gap-1 text-xs">
        <span className="text-[#111827] font-medium">ارفع صورة</span>
        <span className="text-[#9CA3AF]">JPG 80×90px</span>
      </div>
    </div>
  );
}
