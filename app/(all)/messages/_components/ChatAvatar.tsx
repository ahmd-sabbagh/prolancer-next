"use client";

import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  online?: boolean;
};

export default function ChatAvatar({ online }: Props) {
  return (
    <div className="relative">
      <div className="w-11 h-11 rounded-full bg-[#E9ECEF]" />
      <span
        className={cn(
          "absolute bottom-0 start-0 w-3 h-3 rounded-full border-2 border-white",
          online ? "bg-[#00D388]" : "bg-[#ADB5BD]"
        )}
      />
    </div>
  );
}
