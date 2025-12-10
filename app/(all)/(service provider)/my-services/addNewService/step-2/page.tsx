"use client";

import React, { useState } from "react";
import FormCard from "../_component/FormCard";
import SelectField from "../_component/SelectField";
import Link from "next/link";

const Step2: React.FC = () => {
  const [stagesCount, setStagesCount] = useState<number>(3);
  const stages = Array.from({ length: stagesCount }, (_, index) => index + 1);
  const options = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-3">

      <div className="bg-white rounded-[10px] shadow-[0_22px_60px_rgba(15,23,42,0.06)] px-6 md:px-10 py-6 flex items-center justify-between gap-4">
        <span className="text-sm text-[#111827] whitespace-nowrap">
          كم مرحلة تشملها الخدمة
        </span>
        <div className="flex-1">
          <SelectField
            placeholder="حدد عدد المراحل"
            value={stagesCount}
            onChange={(value) => setStagesCount(Number(value))}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt} مرحلة
              </option>
            ))}
          </SelectField>
        </div>
      </div>


      {stages.map((stage) => (
        <FormCard key={stage} className="space-y-4">

          <div className="text-right space-y-1">
            <h3 className="text-sm md:text-base text-[#111827]">
              {stage === 1
                ? "المرحلة الأولى"
                : stage === 2
                  ? "المرحلة الثانية"
                  : stage === 3
                    ? "المرحلة الثالثة"
                    : stage === 4
                      ? "المرحلة الرابعة"
                      : "المرحلة الخامسة"}
            </h3>
            <p className="text-xs text-[#6B7280]">
              من فضلك قدم شرح عن المرحلة و طرق التسليم.
            </p>
          </div>


          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="عنوان المرحلة"
              className="
                w-full
                rounded-[5px]
                border! border-[#E5E7EB]!
                bg-white
                h-[44px]
                px-3
                text-sm text-[#111827]
                outline-none text-right
                focus:border-[#00B274]
                focus:ring-2 focus:ring-[#00B27433]
              "
            />

            <input
              type="number"
              placeholder="عدد الساعات"
              className="
                w-full md:w-[220px]
                rounded-[5px]
                border! border-[#E5E7EB]!
                bg-white
                h-[44px]
                px-3
                text-xs text-[#111827]
                outline-none text-right
                focus:border-[#00B274]
                focus:ring-2 focus:ring-[#00B27433]
              "
            />
          </div>

          <textarea
            placeholder="وصف المرحلة"
            className="
              w-full min-h-[90px]
              rounded-[5px]
              border border-[#E5E7EB]
              bg-white
              px-3 py-2
              text-sm text-[#111827]
              outline-none text-right
              leading-relaxed
              focus:border-[#00B274]
              focus:ring-2 focus:ring-[#00B27433]
            "
          />
        </FormCard>
      ))}


      <div
        className="
          pt-4 mt-4
          flex flex-col items-center gap-3
          md:flex-row md:justify-between md:items-center
        "
      >
        <Link
          href="/my-services/addNewService/step-1"
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
          href="/my-services/addNewService/step-3"
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
          التالي
        </Link>
      </div>


    </div>
  );
};

export default Step2;
