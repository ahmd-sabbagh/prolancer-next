"use client";

import React, { useEffect, useRef, useState } from "react";
import NotificationTrigger from "./NotificationTrigger";
import NotificationDropdown from "./NotificationDropdown";
import { mockNotifs } from "./notifications.mock";

export default function Notification() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!open) return;
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={wrapRef}>
      <NotificationTrigger open={open} onToggle={() => setOpen((p) => !p)} />

      <NotificationDropdown
        open={open}
        items={mockNotifs}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
