import { chat } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Message = () => {
  return (
    <Link href={""} className="hidden lg:block">
      <div className="w-4.5 h-4.5 relative">
        <Image src={chat} alt="mail icon" fill loading="lazy" sizes="18px" />
      </div>
    </Link>
  );
};

export default Message;
