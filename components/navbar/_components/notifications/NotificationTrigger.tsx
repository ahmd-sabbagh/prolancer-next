"use client";

import React from "react";
import Link from "next/link";
import { FiBell } from "react-icons/fi";

type Props = {
  open: boolean;
  onToggle: () => void;
};

export default function NotificationTrigger({ open, onToggle }: Props) {
  return (
    <>
      {/* Mobile: يروح صفحة الإشعارات */}
      <Link href="/notifications" className="lg:hidden block text-white">
        <span className="text-[18px] leading-none inline-flex">
          <FiBell />
        </span>
      </Link>

      {/* Desktop: Dropdown */}
      <button
        type="button"
        className="hidden lg:inline-flex text-white"
        onClick={onToggle}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="text-[18px] leading-none inline-flex">
          <FiBell />
        </span>
      </button>
    </>
  );
}
