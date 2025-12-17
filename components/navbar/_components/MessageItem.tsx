"use client";

import React from "react";
import Image from "next/image";
import type { MsgPreview } from "./messages.types";

type Props = {
  m: MsgPreview;
  withBorder?: boolean;
};

export default function MessageItem({ m, withBorder }: Props) {
  return (
    <div
      className={`px-5 py-4 flex items-center gap-4 ${withBorder ? "border-t border-[#F2F2F2]" : ""
        }`}
    >
      <div className="relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#F2F2F2]">
        {m.avatarUrl ? (
          <Image
            src={m.avatarUrl}
            alt={m.name}
            fill
            sizes="36px"
            className="object-cover"
          />
        ) : (
          <span className="text-sm font-semibold text-[#6C757D]">
          </span>
        )}

        {m.online ? (
          <span className="absolute bottom-1 start-1 w-2.5 h-2.5 rounded-full bg-[#00D388] ring-2 ring-white" />
        ) : null}
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="text-sm text-[#262626] leading-5 truncate">
          {m.name}
        </div>
        <p className="text-xs text-[#6C757D] mt-1 leading-5 line-clamp-1">
          {m.lastMessage}
        </p>
      </div>

      <div className="w-[70px] shrink-0 flex flex-col items-end justify-start gap-2">
        <span className="text-xs text-[#6C757D]">
          {m.time}
        </span>
        {m.unreadCount && m.unreadCount > 0 ? (
          <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-[#F04438] text-white text-[11px] leading-[18px] text-center">
            {m.unreadCount > 99 ? "99+" : m.unreadCount}
          </span>
        ) : null}
      </div>
    </div>
  );
}
