"use client";

import React from "react";
import { FiLayers, FiShare2 } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";
import Link from "next/link";

type WorkItem = {
    id: string;
    title: string;
    category: string;
    priceRange: string;
    rate: number;
    reviewsCount: number;
};

const works: WorkItem[] = [
    {
        id: "1",
        title: "برمجة و تصميم تطبيق جوال رتتيب",
        category: "برمجة تطبيقات",
        priceRange: "$40000-$42000",
        rate: 4.8,
        reviewsCount: 751,
    },
    {
        id: "2",
        title: "برمجة و تصميم تطبيق جوال رتتيب",
        category: "برمجة تطبيقات",
        priceRange: "$40000-$42000",
        rate: 4.8,
        reviewsCount: 751,
    },
    {
        id: "3",
        title: "برمجة و تصميم تطبيق جوال رتتيب",
        category: "برمجة تطبيقات",
        priceRange: "$40000-$42000",
        rate: 4.8,
        reviewsCount: 751,
    },
];

const portfolio: React.FC = () => {
    return (
        <section
            className="min-h-screen bg-[#F8FAFF] py-10 md:py-16"
        >
            <div className="mx-auto max-w-[1511px] px-4 md:px-6 space-y-8">

                <div className="flex items-center justify-between">
                    <h1 className="text-xl md:text-2xl font-semibold text-[#111827]">
                        معرض الاعمال
                    </h1>
                    <div className="flex items-center justify-between">
                        <Link
                            href="/portfolio/addNewProject"
                            className="
      bg-[#00D084] text-white text-sm md:text-base
      px-5 md:px-6 py-2 md:py-2.5 
      rounded-full
      shadow-[0_10px_25px_rgba(16,185,129,0.35)]
      transition-all duration-200
      hover:translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,185,129,0.45)]
      flex items-center justify-center
    "
                        >
                            إضافة عمل
                        </Link>

                    </div>


                </div>


                <div className="space-y-6">
                    {works.map((work) => (
                        <article
                            key={work.id}
                            className="
                bg-white 
                rounded-[26px]
                px-6 py-6 md:px-10 md:py-7
                shadow-[0_22px_60px_rgba(15,23,42,0.06)]
                flex items-center justify-between gap-8
              "
                        >
                            <div className="flex-1 flex flex-col gap-3 items-start text-right">

                                <div className="flex items-center gap-2 h-[24px]">
                                    <FiLayers className="text-[#00B274] w-5 h-5" />

                                    <span className="text-[12px] leading-[12px]">
                                        {work.category}
                                    </span>
                                </div>


                                <h3 className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] font-semibold text-[#111827]">
                                    {work.title}
                                </h3>


                                <div className="flex items-center gap-2 h-[26px] text-[14px] text-[#6B7280] mt-1">
                                    <AiFillStar className="text-[#F8B400] w-4 h-4" />
                                    <span className="text-[#111827] font-medium">
                                        {work.rate.toFixed(1)}
                                    </span>

                                    <span className="text-[#8A8A8A]">
                                        ({work.reviewsCount.toLocaleString("en-US")} تقييم)
                                    </span>


                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-start gap-6 w-[220px]">


                                <button
                                    type="button"
                                    className="text-[#6B7280] text-2xl leading-none self-end"
                                >
                                    ...
                                </button>


                                <div className="flex items-center gap-6 self-start">


                                    <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md text-[#00B274]">
                                            <LuWallet className="w-6 h-6" />
                                        </span>
                                        <span className="font-medium">{work.priceRange}</span>
                                    </div>


                                    <button
                                        type="button"
                                        className="w-[48px] h-[48px] rounded-full border border-[#E5E7EB] flex items-center justify-center"
                                    >
                                        <FiShare2 className="w-[24px] h-[24px] text-[#111827]" />
                                    </button>

                                </div>
                            </div>




                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default portfolio;
