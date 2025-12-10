"use client";

import React from "react";
import FormCard from "../_component/FormCard";
import Link from "next/link";

const Step3: React.FC = () => {
  return (
    <div className="space-y-10">

      <FormCard className="space-y-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 text-right space-y-1">
            <h3 className="text-base md:text-lg text-[#111827]">
              تكلفة الخدمة الأساسية
            </h3>
          </div>

          <div className="flex-1">
            <input
              type="number"
              placeholder="حدد التكلفة الأساسية"
              className="
                w-full h-[50px]
                rounded-[5px]
                border! border-[#E5E7EB]!
                bg-white
                px-4 text-sm text-[#6B7280]
                focus:text-[#111827]
                outline-none text-right
                focus:border-[#00B274]
                focus:ring-2 focus:ring-[#00B27433]
              "
            />
          </div>
        </div>

        <div className="w-full">
          <textarea
            placeholder="وصف الخدمة"
            className="
              w-full min-h-[130px]
              rounded-[5px]
              border border-[#E5E7EB]
              bg-white
              px-4 py-3
              text-sm text-[#111827]
              outline-none text-right
              leading-relaxed
              focus:border-[#00B274]
              focus:ring-2 focus:ring-[#00B27433]
            "
          />
        </div>
      </FormCard>
      <div
        className="
          pt-4 mt-4
          flex flex-col items-center gap-3
          md:flex-row md:justify-between md:items-center
        "
      >
        <Link
          href="/my-services/addNewService/step-2"
          className="
            w-full md:w-[140px] h-[52px]
            rounded-[12px]
            border border-[#00B274]
            text-[#00B274]
            text-sm md:text-base
            flex items-center justify-center
            transition-all duration-150 ease-out
            hover:bg-[#00B27408]
            hover:shadow-[0_4px_12px_rgba(0,178,116,0.15)]
          "
        >
          رجوع
        </Link>

        <Link
          href=""
          className="
            w-full md:w-[360px] h-[52px]
            bg-[#00D084] text-white text-sm md:text-base
            rounded-[12px]
            flex items-center justify-center
            shadow-[0_10px_25px_rgba(16,185,129,0.35)]
            transition-all duration-150 ease-out
            hover:translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)]
          "
        >
          نشر الخدمة
        </Link>
      </div>
    </div>
  );
};

export default Step3;
