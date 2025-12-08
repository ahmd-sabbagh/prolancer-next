import { arrow, person1, person2, person3 } from "@/assets";
import Image from "next/image";
import React from "react";

const Images = () => {
  return (
    <div className="flex items-end relative">
      {/* one */}
      <div className="w-[269px] h-[508px] relative overflow-hidden rounded-t-[105px] rounded-br-[85px] border border-white">
        <Image
          src={person1}
          alt="person1"
          fill
          sizes="269px"
          loading="lazy"
          className="object-cover"
        />
      </div>
      {/* two */}
      <div className="w-[269px] h-[553px] relative overflow-hidden rounded-t-[90px] border-4 border-white">
        <Image
          src={person2}
          alt="person2"
          fill
          sizes="269px"
          loading="lazy"
          className="object-cover"
        />
      </div>
      {/* three */}
      <div className=" absolute end-0 -z-10 bottom-8">
        <div className="w-[393px] h-[393px] rounded-full relative overflow-hidden border-4 border-white">
          <Image
            src={person3}
            alt="person3"
            fill
            sizes="393px"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
      {/* arrow */}
      <div className=" absolute -top-12 end-[140px]">
        <div className="w-[200px] h-[187px] relative">
          <Image
            src={arrow}
            alt="arrow"
            fill
            sizes="200px"
            loading="lazy"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
