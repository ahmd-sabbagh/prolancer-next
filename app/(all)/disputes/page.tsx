"use client";
import React, { FC } from "react";
import { useTranslations } from "next-intl";
import ImageUploadBox from "./_components/ImageUploadBox";
import Header from "./_components/Header";

const DisputesPage: FC = () => {
    const t = useTranslations();

    return (
        <section className="min-h-screen bg-[#F6F8FB] pb-10">
            <div className="container pt-8">
                {/* Page Title */}
                <div className="mb-8 mt-7 flex justify-between">
                    <Header />
                    <button
                        type="button"
                        className="
              self-start sm:self-auto
              bg-[#00D084] text-white
              text-sm md:text-base
              px-5 md:px-7 py-2.5 
              rounded-xl
              transition-all duration-200
            "
                    >
                        {t("upload_dispute")}
                    </button>
                </div>

                {/* Card */}
                <div className="
            bg-white
            px-4 sm:px-5 py-4 sm:py-5
            space-y-6 md:space-y-8
            rounded-2xl
            border border-[#EEF2FF]
            shadow-sm
          "
                >
                    {/* Title + Upload */}
                    <div className="flex flex-col gap-5 md:gap-8">
                        <h2 className="text-lg md:text-xl text-[#111827]">
                            {t("raise_dispute")}
                        </h2>
                        <ImageUploadBox />
                    </div>

                    {/* Selects row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* نوع النزاع */}
                        <div className="space-y-2">
                            <label className="block text-sm text-[#111827]">
                                {t("dispute_type")}
                            </label>
                            <div className="relative">
                                <select
                                    defaultValue=""
                                    className="
                    w-full h-[50px]
                    rounded-[10px]
                    border border-[#E5E7EB]
                    bg-white
                    px-4 text-sm text-[#111827]
                    outline-none
                    focus:border-[#00B274]
                    focus:ring-2 focus:ring-[#00B27433]
                    appearance-none
                  "
                                >
                                    <option value="" disabled>{t("select_dispute_type")}</option>
                                    <option>{t("financial_dispute")}</option>
                                    <option>{t("delivery_dispute")}</option>
                                    <option>{t("quality_dispute")}</option>
                                </select>
                                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] ${t("dir") === "rtl" ? "left-4" : "right-4"}`}>▾</span>

                            </div>
                        </div>

                        {/* العقد المتعلق */}
                        <div className="space-y-2">
                            <label className="block text-sm text-[#111827]">
                                {t("related_contract")}
                            </label>
                            <div className="relative">
                                <select
                                    defaultValue=""
                                    className="
                    w-full h-[50px]
                    rounded-[10px]
                    border border-[#E5E7EB]
                    bg-white
                    px-4 text-sm text-[#111827]
                    outline-none
                    focus:border-[#00B274]
                    focus:ring-2 focus:ring-[#00B27433]
                    appearance-none
                  "
                                >
                                    <option value="" disabled>{t("select_contract")}</option>
                                    <option>#1254</option>
                                    <option>#1255</option>
                                    <option>#1256</option>
                                </select>
                                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] ${t("dir") === "rtl" ? "left-4" : "right-4"}`}>▾</span>

                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="block text-sm text-[#111827]">
                            {t("dispute_details")}
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
                            placeholder={t("write_dispute_details")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DisputesPage;
