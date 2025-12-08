import { landing } from "@/assets";
import Logout from "@/components/logout/Logout";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Profile = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-center">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-4">
        <div className="flex justify-between items-center lg:block">
          <div className="w-20 lg:w-[120px] h-20 lg:h-[120px] relative">
            <Image
              src={landing}
              fill
              loading="lazy"
              alt="profile image"
              className="object-cover rounded-full"
              sizes="(max-width: 1024px) 80px, 120px"
            />
          </div>
          <div className="lg:hidden">
            <Logout />
          </div>
        </div>
        {/* name */}
        <div className="">
          <h3 className="md:text-2xl dark-color">{"عماد الدين حسين"}</h3>
          <div className="mt-4 flex items-center gap-5">
            <div className="flex items-center gap-1 pe-5 border-e border-[#E4E4E4]">
              <div className="flex items-center gap-1">
                <span className="text-xl text-[#F4AA1A]">
                  <FaStar />
                </span>
                <span className="dark-color">{"4.8"}</span>
              </div>
              <div className="text-[#67696E]">{"(751 تقييم)"}</div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl text-[#00D388]">
                <HiOutlineLocationMarker />
              </span>
              <div className="text-[#67696E]">{"جدة - حي النعيم"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Logout />
      </div>
    </div>
  );
};

export default Profile;
