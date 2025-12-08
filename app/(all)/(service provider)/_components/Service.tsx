import { landing } from "@/assets";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="p-3 rounded-[14px] bg-white box-shadow2">
      <div className="">
        <div className="w-[179px] h-[150px] relative">
          <Image
            src={landing}
            alt="service-image"
            fill
            loading="lazy"
            sizes="179px"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
