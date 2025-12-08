import { landing, logo_white } from "@/assets";
import Image from "next/image";
import React from "react";
import Logo from "./Logo";
interface BgProps {
  children?: React.ReactNode;
}

const ImageMiddleBg: React.FC<BgProps> = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className=" hidden relative  lg:flex lg:items-center lg:justify-center">
        {/* logo */}
        <Logo logo={logo_white} />
        {/* shape */}
        <Image
          src={landing}
          alt="Landing Background"
          fill
          sizes="50vw"
          loading="lazy"
          className="object-cover z-0"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 z-1 pointer-events-none bg-[#262626]/90"
          aria-hidden="true"
        />
      </div>
      <div className="bg-[#F7F8FA] flex-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ImageMiddleBg;
