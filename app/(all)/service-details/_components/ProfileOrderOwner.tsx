"use client";

import { chat, landing } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaStar } from "react-icons/fa6";

const ProfileOrderOwner = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/service-details/request-service" ? (
        <div className="flex items-start justify-between bg-[#FAFAFA] py-3.5 px-5">
          <div className="flex items-center gap-3">
            <div className="w-10  h-10  relative">
              <Image
                src={landing}
                fill
                loading="lazy"
                alt="profile image"
                className="object-cover rounded-full"
                sizes="40px"
              />
            </div>
            <div className="">
              <h3 className="text-sm md:text-base dark-color">
                {"عماد الدين حسين"}
              </h3>
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
      ) : null}
    </>
  );
};

export default ProfileOrderOwner;
