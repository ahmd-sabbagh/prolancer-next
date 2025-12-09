"use client";

import React, { FC } from "react";
import ImageUploadBox from "./_components/ImageUploadBox";

const tags: string[] = ["UX/UI DESIGNER", "WEB DESIGN", "APP"];

const AddNewProjectPage: FC = () => {
  return (
    <section
      className="min-h-screen bg-[#F8FAFF] py-10 md:py-16"
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 space-y-8">

        <div className="flex items-center justify-between">

          <h1 className="text-2xl md:text-3xl font-semibold text-[#111827]">
            اضافة عمل جديد
          </h1>


          <button
            type="button"
            className="
              bg-[#00D084] text-white text-sm md:text-base
              px-6 md:px-7 py-2.5 
              rounded-lg
              shadow-[0_10px_25px_rgba(16,185,129,0.35)]
              transition-all duration-200
              hover:translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)]
            "
          >
            حفظ و اضافة
          </button>
        </div>


        <div
          className="
            bg-white rounded-[26px]
            shadow-[0_22px_60px_rgba(15,23,42,0.06)]
            px-6 md:px-10 py-8 md:py-10
            space-y-8
          "
        >

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-[#111827]">
              المعلومات الاساسية
            </h2>
            <ImageUploadBox />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-[#111827] text-right">
              عنوان العمل
            </label>
            <input
              type="text"
              defaultValue="تصميم تطبيق موبايل"
              className="
                w-full h-[50px]
                rounded-[10px]
                border! border-[#E5E7EB]!
                bg-white
                px-4 text-sm text-[#111827]
                outline-none
                focus:border-[#00B274] 
                focus:ring-2 focus:ring-[#00B27433]
              "
            // style={{ border: "1px solid #E5E7EB" }}
            />

          </div>

          <div className="space-y-2">
            <label className="block text-sm text-[#111827] text-right">
              المهارات و الادوات
            </label>

            <div
              className="
                w-full h-[50px]
                rounded-[10px]
                border border-[#E5E7EB]
                bg-white
                flex items-center
                px-3
                overflow-x-auto
                gap-2
              "
              dir="ltr"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    inline-flex items-center justify-center
                    px-3 py-1
                    rounded-[6px]
                    border border-[#D1D5DB]
                    text-[11px] tracking-wide
                    text-[#374151]
                    font-semibold
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-[#111827] text-right">
              الوصف
            </label>

            <textarea
              className="
      w-full min-h-[130px]
      rounded-[10px]
      border border-[#E5E7EB]
      bg-white
      px-4 py-3
      text-sm text-[#111827]
      outline-none
      leading-relaxed
      text-right
      focus:border-[#00B274]
      focus:ring-2 focus:ring-[#00B27433]
    "
              defaultValue={
                "هل أنت مصمم تجربة مستخدم، ولديك سجل حافل في تقديم تجارب رقمية تفاعلية تحقق نتائج ملموسة؟ هل أنت راوي قصص استراتيجي ومفكر أنظمة قادر على ابتكار وتصميم حملات ذكية وعالية المستوى عبر مجموعة متنوعة من الوسائط؟"
              }
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AddNewProjectPage;
