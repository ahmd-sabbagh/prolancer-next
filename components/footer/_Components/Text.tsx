import Logo from "@/components/navbar/_components/Logo";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { LiaInstagram } from "react-icons/lia";

const Text = () => {
  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "",
    },
    {
      icon: <LiaInstagram />,
      href: "",
    },
    {
      icon: <FaTiktok />,
      href: "",
    },
    {
      icon: <BsTwitterX />,
      href: "",
    },
    {
      icon: <FaLinkedinIn />,
      href: "",
    },
  ];
  return (
    <div>
      <Logo />
      <p className="text-white mt-4">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من توليد هذا النص
      </p>
      <div className="flex items-center gap-4 mt-7">
        {socialLinks.map((icon, idx) => (
          <Link
            href={icon.href}
            key={idx}
            className="w-[52px] h-[52px] rounded-full bg-[#FBFBFB14] flex-center green-color text-xl"
          >
            {icon.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Text;
