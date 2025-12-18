"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Language from "./Language";
import TransferProvider from "./TransferProvider";
import ProfileIcon from "./ProfileIcon";
import Message from "./messages/Message";
import Notification from "./notifications/Notification";

import { LuSearch } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { heart } from "@/assets";

type Props = {
  lang: string;
};

export default function NavbarActions({ lang }: Props) {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <Link href={"/favorite"} className="hidden lg:block">
        <div className="w-4.5 h-4.5 relative">
          <Image src={heart} alt="heart icon" fill loading="lazy" sizes="18px" />
        </div>
      </Link>

      <Link href={"/blog"} className="hidden lg:block text-white text-xl">
        <FaRegNewspaper />
      </Link>

      {/* search mobile */}
      <Link href={""} className="lg:hidden block text-white text-xl">
        <LuSearch />
      </Link>

      <Message />
      <Notification />

      <Language lang={lang} />
      <TransferProvider />
      <ProfileIcon />
    </div>
  );
}
