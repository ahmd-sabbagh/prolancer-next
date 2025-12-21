"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import MessageItem from "./MessageItem";
import type { MsgPreview } from "./messages.types";

type Props = {
  open: boolean;
  items: MsgPreview[];
  onClose: () => void;
};

export default function MessageDropdown({ open, items, onClose }: Props) {
  const t = useTranslations()

  if (!open) return null;

  return (
    <div
      className="hidden lg:block absolute end-0 mt-3 w-[360px] bg-white rounded-xl shadow-lg border border-[#EDEDED] overflow-hidden z-50"
      role="menu"
    >
      {/* Header */}
      <div className="pt-4">
        <h6 className="text-sm text-[#6C757D] px-5">
          {t("messages")}
        </h6>
        <div className="mt-3 h-px bg-[#F2F2F2]" />
      </div>

      {/* List */}
      <div className="max-h-[420px] overflow-y-auto">
        {items.map((m, idx) => (
          <MessageItem
            key={m.id}
            m={m}
            withBorder={idx !== 0}
            onClick={onClose}
          />
        ))}
      </div>

      {/* View all */}
      <div className="border-t border-[#F2F2F2]">
        <Link
          href="/messages"
          className="block text-center py-3 text-sm text-[#00D388]"
          onClick={onClose}
        >
          {t("viewAll")}
        </Link>
      </div>
    </div>
  );
}
