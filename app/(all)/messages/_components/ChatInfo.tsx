"use client";

import React from "react";
import { SlLocationPin } from "react-icons/sl";

type Props = {
  name?: string;
  location?: string;
};

export default function ChatInfo({ name, location }: Props) {
  return (
    <div>
      <p>{name}</p>

      {location ? (
        <div className="flex items-center gap-1 mt-1 text-xs text-[#6C757D]">
          <SlLocationPin className="text-sm text-[#00D388]" />
          <span>{location}</span>
        </div>
      ) : null}
    </div>
  );
}
