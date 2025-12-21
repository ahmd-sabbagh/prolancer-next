"use client";

import React from "react";
import { FiBell } from "react-icons/fi";
import type { Notif } from "./types";

type Props = {
  n: Notif;
  withBorder?: boolean;
};

export default function NotificationRow({ n, withBorder }: Props) {
  return (
    <div
      className={`
        px-6 py-[24px]
        flex items-center gap-5
        transition-colors duration-200
        hover:bg-[#F8FAFF]
        cursor-pointer
        ${withBorder ? "border-t border-[#F2F2F2]" : ""}
      `}
    >
      {/* icon */}
      <div className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0">
        {n.unread ? (
          <span className="absolute top-1 start-1 w-3 h-3 rounded-full bg-[#F04438]" />
        ) : null}

        <FiBell
          className={`text-[24px] ${
            n.unread ? "text-[#00D388]" : "text-[#ADB5BD]"
          }`}
        />
      </div>

      {/* content */}
      <div className="flex-1">
        <div className="flex justify-between gap-4">
          <div className="text-[17px] font-semibold text-[#262626] leading-7">
            {n.title}
          </div>

          <div className="w-[80px] text-[14px] text-[#6C757D] shrink-0">
            {n.time}
          </div>
        </div>

        <p className="text-[15px] text-[#6C757D] mt-2 leading-7">
          {n.desc}
        </p>
      </div>
    </div>
  );
}
