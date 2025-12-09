import Link from "next/link";
import React from "react";

const Step1: React.FC = () => {
  return (
          <div className="bg-white rounded-[10px] shadow-[0_22px_60px_rgba(15,23,42,0.06)] px-6 md:px-10 py-6 space-y-8">
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 space-y-2 text-right">
          <h3 className="text-base md:text-lg font-semibold text-[#111827]">
            العنوان
          </h3>
          <p className="text-xs text-[#6B7280] leading-relaxed">
            باعتبار أن عنوانك هو واجهة متجرك، فهو المكان الأكثر أهمية لإدراج
            الكلمات الرئيسية التي من المرجح أن يستخدمها المشترون للبحث عن خدمة
            مثل خدمتك.
          </p>
        </div>
        <div className="flex-1 space-y-3">
          <input
            type="text"
            placeholder="اكتب عنوان خدمتك هنا"
            className="
              w-full h-[56px]
              rounded-[5px]
              border! border-[#E5E7EB]!
              bg-white
              px-4 text-sm text-[#111827]
              outline-none
              text-right
              focus:border-[#00B274]
              focus:ring-2 focus:ring-[#00B27433]
            "
          />
          <p className="text-[11px] text-[#9CA3AF] text-left">
            0 / 80 حد أقصى
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">

        <div className="w-full md:w-1/3 space-y-2 text-right">
          <h3 className="text-base md:text-lg font-semibold text-[#111827]">
            القسم
          </h3>
          <p className="text-xs text-[#6B7280] leading-relaxed">
            اختر الفئة والفئة الفرعية الأكثر ملاءمة لخدمتك.
          </p>
        </div>


        <div className="flex-1 flex flex-col md:flex-row gap-4">
          <SelectField placeholder="اختر القسم" />
          <SelectField placeholder="اختر القسم الفرعي" />
        </div>
      </div>

      <div className="pt-4 mt-4 flex justify-end">
        <Link
          href="/my-services/addNewService/step-2"
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
</div>
  );
};

const SelectField: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="relative w-full md:w-1/2">
      <select
        className="
          w-full h-[50px]
          rounded-[5px]
          border border-[#E5E7EB]
          bg-white
          pr-4 pl-10
          text-sm text-[#111827]
          outline-none text-right
          appearance-none
          focus:border-[#00B274]
          focus:ring-2 focus:ring-[#00B27433]
        "
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
      </select>
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
        ▾
      </span>
    </div>
  );
};

export default Step1;
