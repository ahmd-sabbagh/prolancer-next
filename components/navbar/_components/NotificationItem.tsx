"use client";

import React from "react";
import { FiBell } from "react-icons/fi";
import type { Notif } from "./notifications.types";

type Props = {
  n: Notif;
  withBorder?: boolean;
};

export default function NotificationItem({ n, withBorder }: Props) {
  return (
    <div
      className={`px-5 py-4 flex items-center gap-4 ${
        withBorder ? "border-t border-[#F2F2F2]" : ""
      }`}
    >
      {/* icon */}
      <div className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0">
        {n.unread ? (
          <span className="absolute top-1 start-1 w-2 h-2 rounded-full bg-[#F04438]" />
        ) : null}

        <FiBell
          className={`text-[18px] ${n.unread ? "text-[#00D388]" : "text-[#ADB5BD]"}`}
        />
      </div>

      {/* content */}
      <div className="flex-1">
        <div className="flex justify-between gap-3">
          <div className="text-sm font-semibold text-[#262626] leading-5">
            {n.title}
          </div>
          <div className="w-[70px] text-xs text-[#6C757D] text-start shrink-0">
            {n.time}
          </div>
        </div>

        <p className="text-xs text-[#6C757D] mt-1 leading-5">{n.desc}</p>
      </div>
    </div>
  );
}
