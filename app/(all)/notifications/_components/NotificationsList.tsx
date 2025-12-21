"use client";

import React from "react";
import type { Notif } from "./types";
import NotificationRow from "./NotificationRow";

type Props = {
  items: Notif[];
};

export default function NotificationsList({ items }: Props) {
  if (!items.length) {
    return (
      <div className="py-20 text-center text-[#6C757D] text-[16px]">
        لا توجد إشعارات حالياً
      </div>
    );
  }

  return (
    <div>
      {items.map((n, idx) => (
        <NotificationRow key={n.id} n={n} withBorder={idx !== 0} />
      ))}
    </div>
  );
}
