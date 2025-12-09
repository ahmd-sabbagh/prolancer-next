"use client"
import Link from "next/link";
import React, { useState } from "react";

const Step2: React.FC = () => {
  const [stagesCount, setStagesCount] = useState<number>(3);
  const stages = Array.from({ length: stagesCount }, (_, index) => index + 1);

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
            onChange={setStagesCount}
          />
        </div>
      </div>


      {stages.map((stage) => (
        <div
          key={stage}
          className="
            rounded-[10px]
            bg-white
            px-4 md:px-6 py-5 md:py-6
            space-y-4
          "
        >

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
        </div>

      ))}


      <div className="pt-4 mt-4 flex justify-between">
        <Link
          href="/my-services/addNewService/step-1"
          className="
    w-[140px] h-[52px]
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
            bg-[#00D084] text-white text-sm md:text-base
            w-[360px] h-[52px]
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


type SelectFieldProps = {
  placeholder: string;
  value: number;
  onChange: (value: number) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const options = [1, 2, 3, 4, 5];

  return (
    <div className="relative w-full">
      <select
        className="
          w-full h-[50px]
          rounded-[5px]
          border border-[#E5E7EB]
          bg-white
          pr-4 pl-10
          text-sm
          text-[#6B7280]
          focus:text-[#111827]
          outline-none text-right
          appearance-none
          focus:border-[#00B274]
          focus:ring-2 focus:ring-[#00B27433]
        "
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >

        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt} مرحلة
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
        ▾
      </span>
    </div>
  );
};

export default Step2;
