import { landing } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileIcon = () => {
  return (
    <div>
      <Link href={"/setting"}>
        <div className="w-8 h-8 rounded-full relative">
          <Image
            src={landing}
            alt="profile image"
            fill
            loading="lazy"
            sizes="32px"
            className=" object-cover rounded-full"
          />
          <div className="w-3 h-3 rounded-full absolute bottom-0 -start-.5 bg-green-color border-2 border-white"></div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileIcon;
