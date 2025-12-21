"use client";

import React, { FC } from "react";
import { useTranslations } from "next-intl";
import ImageUploadBox from "./_components/ImageUploadBox";
import SkillsTagsBar from "./_components/SkillsTagsBar";

const tags: string[] = ["UX/UI DESIGNER", "WEB DESIGN", "APP"];

const AddNewProjectPage: FC = () => {
  const t = useTranslations();

  return (
    <section className="min-h-screen bg-[#F8FAFF] py-8 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 space-y-8 md:space-y-10">

        {/* Header */}
        <div
          className="
            flex flex-col gap-4
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl text-[#111827] ">
            {t("add_new_project")}
          </h1>

          <button
            type="button"
            className="
              self-start sm:self-auto
              bg-[#00D084] text-white
              text-sm md:text-base
              px-5 md:px-7 py-2.5 
              rounded-lg
              shadow-[0_10px_25px_rgba(16,185,129,0.35)]
              transition-all duration-200
              hover:translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)]
            "
          >
            {t("save_and_add")}
          </button>
        </div>

        {/* Card */}
        <div
          className="
            bg-white rounded-[26px]
            shadow-[0_22px_60px_rgba(15,23,42,0.06)]
            px-4 sm:px-6 md:px-10
            py-6 sm:py-8 md:py-10
            space-y-6 md:space-y-8
          "
        >
          {/* Basic info + upload */}
          <div className="flex flex-col gap-5 md:gap-8">
            <h2 className="text-lg md:text-xl text-[#111827] ">
              {t("basic_info")}
            </h2>
            <ImageUploadBox />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="block text-sm text-[#111827] ">
              {t("project_title")}
            </label>
            <input
              type="text"
              defaultValue={t("project_title_default")}
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
            />
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <label className="block text-sm text-[#111827] ">
              {t("skills_tools")}
            </label>
            <SkillsTagsBar tags={tags} />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm text-[#111827] ">
              {t("description")}
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
                focus:border-[#00B274]
                focus:ring-2 focus:ring-[#00B27433]
              "
              defaultValue={t("project_description_default")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewProjectPage;
