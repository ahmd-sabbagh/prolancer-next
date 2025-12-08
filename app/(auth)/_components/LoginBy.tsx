import { apple, facebook, google } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginBy = () => {
  const data = [
    {
      icon: google,
      href: "",
    },
    {
      icon: facebook,
      href: "",
    },
    {
      icon: apple,
      href: "",
    },
  ];
  return (
    <div className="flex items-center gap-4 justify-center px-4 mt-8 relative z-30">
      {data.map((item, idx) => (
        <Link key={idx} href={item.href} className="relative w-14 h-14">
          <Image
            src={item.icon}
            alt="icon"
            fill
            className="object-contain"
            sizes="56px"
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
};

export default LoginBy;
