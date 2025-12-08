import { chat, landing } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlLayers } from "react-icons/sl";

const Profile = () => {
    const t = useTranslations()
  return (
    <div>
      <h3 className="text-2xl dark-color">{t("about_me")}</h3>
      {/* Profile */}
      <div className="flex justify-between items-start lg:items-center mt-5 md:mt-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 lg:w-20 h-10 lg:h-20 relative">
              <Image
                src={landing}
                fill
                loading="lazy"
                alt="profile image"
                className="object-cover rounded-full"
                sizes="(max-width: 1024px) 40px, 80px"
              />
            </div>
            <div className="lg:hidden">
              <h3 className="md:text-2xl dark-color">{"عماد الدين حسين"}</h3>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex items-center gap-1">
                  <span className="text-xl text-[#F4AA1A]">
                    <FaStar />
                  </span>
                  <span className="dark-color text-sm">{"4.8"}</span>
                </div>
                <div className="text-[#67696E] text-sm">{"(751 تقييم)"}</div>
              </div>
            </div>
          </div>
          {/* name */}
          <div className="">
            <h3 className="md:text-2xl dark-color hidden lg:block">
              {"عماد الدين حسين"}
            </h3>
            <div className="lg:mt-4 flex items-center gap-5">
              {/* rate */}
              <div className="lg:flex items-center gap-1 pe-5 border-e border-[#E4E4E4] hidden">
                <div className="flex items-center gap-1">
                  <span className="text-xl text-[#F4AA1A]">
                    <FaStar />
                  </span>
                  <span className="dark-color">{"4.8"}</span>
                </div>
                <div className="text-[#67696E]">{"(751 تقييم)"}</div>
              </div>
              {/* type work */}
              <div className="flex items-center gap-1">
                <span className="text-xl text-[#00D388]">
                  <SlLayers />
                </span>
                <div className="text-[#67696E]">{"برمجة تطبيقات"}</div>
              </div>
              {/* adress */}
              <div className="flex items-center gap-1">
                <span className="text-xl text-[#00D388]">
                  <HiOutlineLocationMarker />
                </span>
                <div className="text-[#67696E]">{"جدة - حي النعيم"}</div>
              </div>
            </div>
          </div>
        </div>
        {/* chat */}
        <Link href={""}>
          <div className="w-10 h-10 relative">
            <Image
              src={chat}
              alt="chat icon"
              loading="lazy"
              fill
              sizes="40px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
