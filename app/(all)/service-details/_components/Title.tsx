import { layer } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Title = () => {
  return (
    <div className="p-4 lg:p-8 bg-white rounded-xl mb-6 sticky top-0">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 relative">
          <Image
            src={layer}
            alt="layer icon"
            fill
            loading="lazy"
            sizes="24px"
          />
        </div>
        <span className="text-[#6C757D]">{"برمجة تطبيقات"}</span>
      </div>
      <h2 className="text-xl md:text-3xl dark-color mt-2 md:mt-3.5">
        {"برمجة و تصميم تطبيق جوال نيتيف"}
      </h2>
      <div className="flex items-center gap-1 mt-2 md:mt-3.5">
        <div className="flex items-center gap-1">
          <span className="text-xl text-[#F4AA1A]">
            <FaStar />
          </span>
          <span className="dark-color">{"4.8"}</span>
        </div>
        <div className="text-[#67696E]">{"(751 تقييم)"}</div>
      </div>
    </div>
  );
};

export default Title;
