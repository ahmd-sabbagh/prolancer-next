"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { chat } from "@/assets";

type Props = {
  open: boolean;
  onToggle: () => void;
  unreadTotal?: number;
};

export default function MessageTrigger({ open, onToggle, unreadTotal = 0 }: Props) {
  const Badge = unreadTotal > 0 ? (
    <span className="absolute -top-1 -start-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#F04438] text-white text-[11px] leading-[18px] text-center">
      {unreadTotal > 99 ? "99+" : unreadTotal}
    </span>
  ) : null;

  return (
    <>
      {/* Mobile */}
      <Link href="/messages" className="lg:hidden block relative">
        <div className="w-4.5 h-4.5 relative">
          <Image src={chat} alt="chat" fill loading="lazy" sizes="18px" />
        </div>
        {Badge}
      </Link>

      {/* Desktop */}
      <button
        type="button"
        className="hidden lg:block relative"
        onClick={onToggle}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <div className="w-4.5 h-4.5 relative">
          <Image src={chat} alt="chat" fill loading="lazy" sizes="18px" />
        </div>
        {Badge}
      </button>
    </>
  );
}
