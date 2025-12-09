import React from "react";
import { FiLayers, FiShare2 } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { LuWallet } from "react-icons/lu";
import { WorkItem } from "./portfolio-data";

interface WorkCardProps {
    work: WorkItem;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
    return (
        <article
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
    );
};

export default WorkCard;
