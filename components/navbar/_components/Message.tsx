"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import MessageTrigger from "./MessageTrigger";
import MessageDropdown from "./MessageDropdown";
import { mockMessages } from "./messages.mock";

export default function Message() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const unreadTotal = useMemo(
    () => mockMessages.reduce((sum, m) => sum + (m.unreadCount ?? 0), 0),
    []
  );

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
      <MessageTrigger open={open} onToggle={() => setOpen((p) => !p)} unreadTotal={unreadTotal} />
      <MessageDropdown open={open} items={mockMessages} onClose={() => setOpen(false)} />
    </div>
  );
}
