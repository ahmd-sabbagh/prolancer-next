import { landing, walet } from "@/assets";
import Image from "next/image";
import React from "react";
import Fav from "./Fav";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const Card = () => {
  return (
    <Link
      href={"/service-details"}
      className="block group bg-white rounded-[14px] overflow-hidden box-shadow2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-[120px] md:h-[184px] overflow-hidden">
        <Image
          src={landing}
          alt="service img"
          fill
          loading="lazy"
          sizes="100%"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="mt-4 md:mt-8 flex items-start justify-between gap-4 px-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 relative">
            <Image
              src={landing}
              alt="profile image"
              fill
              loading="lazy"
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h5 className="dark-color line-clamp-1">{"محمد عماد الدين"}</h5>
            <p className="text-[#74767E] text-xs line-clamp-2">
              {"مبرمج تطبيقات"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[#FFBE5B]">
          <FaStar />
          <span className="font-bold text-xs">{"4.9"}</span>
        </div>
      </div>

      <p className="mt-3 text-[#6C757D] text-sm px-4">
        {"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم "}
      </p>

      <div className="px-4 py-4 border-t border-[#EFEFF0] mt-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 relative">
            <Image src={walet} alt="item" fill sizes="24px" loading="lazy" />
          </div>
          <span className="text-[#6C757D]">{"$40000-$42000"}</span>
        </div>
        <Fav />
      </div>
    </Link>
  );
};

export default Card;
